import axios from 'axios';
import type { NewsQueryParams, NewsResponse } from 'features/news/types';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://api.worldnewsapi.com/';

export const fetchAllNews = async (params?: NewsQueryParams): Promise<NewsResponse> => {
  const { data } = await axios.get(`${BASE_URL}/search-news`, {
    params: {
      'api-key': API_KEY,
      'source-country': 'ru',
      language: 'ru',
      number: 10,
      ...params,
    },
  });

  return data;
};
