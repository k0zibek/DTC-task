import { useQuery } from '@tanstack/react-query';
import { fetchTopHeadlines } from 'features/news/api/newsApi';

export const useNews = () => useQuery({
  queryKey: ['fetchTopHeadlines'],
  queryFn: fetchTopHeadlines,
});
