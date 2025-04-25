import { type QueryFunctionContext, useQuery } from '@tanstack/react-query';
import { fetchAllNews } from 'features/news/api/newsApi';
import type { NewsQueryParams, NewsResponse } from 'features/news/types';

type NewsKey = ['allNews', NewsQueryParams?];

export const useNews = (params?: NewsQueryParams) => useQuery<NewsResponse, Error, NewsResponse, NewsKey>({
  queryKey: ['allNews', params],
  queryFn: (ctx: QueryFunctionContext<NewsKey>) => {
    const [, queryParams] = ctx.queryKey;

    return fetchAllNews(queryParams);
  },
  placeholderData: (previousData) => previousData,
});
