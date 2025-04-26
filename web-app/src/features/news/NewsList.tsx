import { NewsCard } from 'features/news/components/NewsCard';
import { useNews } from 'features/news/hooks/useNews';

export const NewsList = () => {
  const { data: articles, isLoading, error } = useNews();

  if (isLoading) {
    return <h3>Загрузка...</h3>;
  }

  if (error) {
    return <p>Ошибка загрузки новостей</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
      {articles?.news.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
};
