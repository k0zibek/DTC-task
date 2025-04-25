import axios from 'axios';
import type { NewsQueryParams, NewsResponse } from 'features/news/types';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://api.thenewsapi.com/v1/news';

export const fetchAllNews = async (params?: NewsQueryParams): Promise<NewsResponse> => {
  const { data } = await axios.get(`${BASE_URL}/top`, {
    params: {
      api_token: API_KEY,
      locale: 'ru',
      language: 'ru',
      ...params,
    },
  });

  return data;
};
