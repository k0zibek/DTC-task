import { NewsCard } from 'features/news/components/NewsCard';
import { useNews } from 'features/news/hooks/useNews';

export const NewsList = () => {
  const { data, isLoading, error } = useNews();

  if (isLoading) {
    return <h3>Загрузка...</h3>;
  }

  if (error) {
    return <p>Ошибка загрузки новостей</p>;
  }

  return (
    <div className="grid gap-4">
      {data?.articles.map((article) => (
        <NewsCard key={article.title} article={article} />
      ))}
    </div>
  );
};
