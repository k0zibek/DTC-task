import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { NewsPage } from 'features/news/NewsPage';

export const App = () => (
  <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<NewsPage />} path="/news/:id" />
  </Routes>
);
