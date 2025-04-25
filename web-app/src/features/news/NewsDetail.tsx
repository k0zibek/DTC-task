import { useLocation, useNavigate } from 'react-router-dom';
import { formatDateTime } from 'helpers/formatDateTime';
import type { Article } from 'features/news/types';

export const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article: Article | undefined = location.state?.article;

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
      <button
        className="text-blue-600 underline mb-4"
        onClick={() => navigate('/')}
      >
        ← Назад к списку
      </button>
      {article.image_url && (
        <img
          alt={article.title}
          className="w-full h-full object-cover rounded mb-4"
          src={article.image_url}
        />
      )}
      <h1 className="text-2xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        {formatDateTime(article.published_at)}
      </p>
      <p className="text-gray-800 leading-7">{article.description}</p>
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
