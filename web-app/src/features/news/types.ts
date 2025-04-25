export interface Article {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: number | null;
}

export interface NewsMeta {
  found: number;
  returned: number;
  limit: number;
  page: number;
}

export interface NewsResponse {
  meta: NewsMeta;
  data: Article[];
}

export interface NewsQueryParams {
  page: number;
  pageSize: number;
}
