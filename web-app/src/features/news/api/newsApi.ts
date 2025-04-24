import axios from 'axios';
import type { NewsQueryParams, NewsResponse } from 'features/news/types';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async (params?: NewsQueryParams): Promise<NewsResponse> => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: 'us',
      pageSize: 10,
      apiKey: API_KEY,
      ...params,
    },
  });

  return response.data;
};
