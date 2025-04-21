import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDateTime } from 'helpers/formatDateTime';
import type { Article } from 'features/news/types';

interface NewsCardProps {
  article: Article;
}

export const NewsCard: FC<NewsCardProps> = ({ article }: NewsCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${encodeURIComponent(article.title)}`, {
      state: { article },
    });
  };

  return (
    <div
      className="border rounded-xl p-4 mb-4 shadow-md bg-white cursor-pointer hover:shadow-lg transition"
      onClick={handleClick}
    >
      {article.urlToImage && (
        <img
          alt={article.title}
          className="w-full h-48 object-cover rounded-md mb-2"
          src={article.urlToImage}
        />
      )}
      <h2 className="text-lg font-semibold">{article.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{formatDateTime(article.publishedAt)}</p>
      <p className="text-gray-700">{article.description}</p>
    </div>
  );
};
