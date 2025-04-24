import type { Article } from 'features/news/types';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoritesState = {
  favorites: Article[];
  toggleFavorite: (article: Article) => void;
  isFavorite: (url: string) => boolean;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get): FavoritesState => ({
      favorites: [],
      toggleFavorite: (article) => {
        const { favorites } = get();
        const exists = favorites.some((fav) => fav.url === article.url);

        set({
          favorites: exists
            ? favorites.filter((fav) => fav.url !== article.url)
            : [...favorites, article],
        });
      },
      isFavorite: (url: string) => get().favorites.some((fav) => fav.url === url),
    }),
    {
      name: 'favorites-storage',
    },
  ),
);
