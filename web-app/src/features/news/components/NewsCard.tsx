import type { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavoritesStore } from 'features/favorites/model/favoritesStore';
import { formatDateTime } from 'helpers/formatDateTime';
import type { Article } from 'features/news/types';

interface NewsCardProps {
  article: Article;
}

export const NewsCard: FC<NewsCardProps> = ({ article }: NewsCardProps) => {
  const navigate = useNavigate();
  const isFav = useFavoritesStore((s) => s.isFavorite(article.url));
  const toggleFav = useFavoritesStore((s) => s.toggleFavorite);

  const handleClickDetails = () => {
    navigate(`/news/${article.uuid}`, {
      state: { article },
    });
  };

  const handleClickFavourite = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleFav(article);
  };

  return (
    <div
      className="border rounded-xl p-4 mb-4 shadow-md bg-white cursor-pointer hover:shadow-lg transition"
      onClick={handleClickDetails}
    >
      {
        article.image_url && (
        <img
          alt={article.title}
          className="w-full object-cover rounded-md mb-2"
          src={article.image_url}
        />
        )
      }

      <h2 className="text-lg font-semibold">{article.title}</h2>

      <p className="text-sm text-gray-600 mb-2">{formatDateTime(article.published_at)}</p>

      <p className="text-gray-700">{article.snippet}</p>

      <button
        className="text-sm text-white bg-blue-600 px-6 py-3 rounded-lg"
        onClick={handleClickFavourite}
      >
        {isFav ? 'Убрать из избранного' : 'В избранное'}
      </button>
    </div>
  );
};
