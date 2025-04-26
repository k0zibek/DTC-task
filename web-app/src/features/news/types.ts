export interface Article {
  id: number;
  title: string;
  text: string;
  summary: string;
  url: string;
  image: string;
  video: string;
  publish_date: string;
  author: string;
  authors: string[];
  language: string;
  source_country: string;
  sentiment: number;
}

export interface NewsResponse {
  offset: number,
  number: number,
  available: number,
  news: Article[];
}

export interface NewsQueryParams {
  number: number;
  text?: string;
}
