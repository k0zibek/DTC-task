import { useLocation, useNavigate } from 'react-router-dom';
import { useFavoritesStore } from 'features/favorites/model/favoritesStore';
import { formatDateTime } from 'helpers/formatDateTime';
import type { Article } from 'features/news/types';

export const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article: Article | undefined = location.state?.article;
  const toggleFav = useFavoritesStore((s) => s.toggleFavorite);
  const isFav = useFavoritesStore((s) => s.isFavorite(article.url));

  const handleClickFavourite = () => {
    toggleFav(article);
  };

  if (!article) {
    return (
      <div>
        <p>Новость не найдена</p>
        <button onClick={() => navigate('/')}>← Назад</button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between mb-3">
        <button
          className="text-blue-600 underline mb-4"
          onClick={() => navigate('/')}
        >
          ← Назад к списку
        </button>

        <button
          className="text-sm text-white bg-blue-600 px-6 py-3 rounded-lg"
          onClick={handleClickFavourite}
        >
          {isFav ? 'Убрать из избранного' : 'В избранное'}
        </button>
      </div>

      {
          article.image && (
          <img
            alt={article.title}
            className="w-full h-full object-cover rounded mb-4"
            src={article.image}
          />
          )
      }

      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>

      <p className="text-sm text-gray-600 mb-4">
        {`${article.author ?? ''}
        ${formatDateTime(article.publish_date)}`}
      </p>

      <p className="text-gray-800 leading-7">{article.text || article.summary}</p>

      <a
        className="text-blue-500 underline block mt-6"
        href={article.url}
        rel="noreferrer"
        target="_blank"
      >
        Читать полностью на источнике
      </a>
    </div>
  );
};
