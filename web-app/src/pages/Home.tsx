import { NewsList } from 'features/news/NewsList';

export const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Новости</h1>
    <NewsList />
  </div>
);
