import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavoritesStore } from 'features/favorites/model/favoritesStore';
import { formatDateTime } from 'helpers/formatDateTime';
import { truncateWords } from 'helpers/truncateWords';
import type { Article } from 'features/news/types';

interface NewsCardProps {
  article: Article;
}

const maxWords = 20;

export const NewsCard: FC<NewsCardProps> = ({ article }: NewsCardProps) => {
  const navigate = useNavigate();
  const isFav = useFavoritesStore((s) => s.isFavorite(article.url));
  const toggleFav = useFavoritesStore((s) => s.toggleFavorite);

  const handleClickDetails = () => {
    navigate(`/news/${article.id}`, {
      state: { article },
    });
  };

  const handleClickFavourite = () => {
    toggleFav(article);
  };

  return (
    <div
      className="border rounded-xl p-6 mb-6 shadow-md bg-white transition"
    >
      <div
        className="cursor-pointer rounded-xl mb-6"
        onClick={handleClickDetails}
      >
        {
            article.image && (
            <img
              alt={article.title}
              className="inline object-cover rounded-md mb-2"
              src={article.image}
            />
            )
        }

        <h2 className="text-lg font-semibold">{article.title}</h2>

        <p className="text-sm text-gray-600 mb-2">{formatDateTime(article.publish_date)}</p>

        <p className="text-gray-700">{truncateWords(article.summary || article.text, maxWords)}</p>
      </div>

      <button
        className="text-sm text-white bg-blue-600 px-6 py-3 rounded-lg"
        onClick={handleClickFavourite}
      >
        {isFav ? 'Убрать из избранного' : 'В избранное'}
      </button>
    </div>
  );
};
