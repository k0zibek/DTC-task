import { NewsList } from 'features/news/NewsList';

export const Home = () => (
  <div className="p-4 md:p-8 lg:p-12">
    <h1 className="text-2xl font-bold mb-4">Новости</h1>
    <NewsList />
  </div>
);
