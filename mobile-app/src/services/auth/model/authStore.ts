import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";

type AuthStore = {
  _hasHydrated: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  setHasHydrated: (_hasHydrated: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
          _hasHydrated: false,
          isAuthenticated: false,
          login: () => set({ isAuthenticated: true }),
          logout: () => set({ isAuthenticated: false }),
          setHasHydrated: (state) => set({ _hasHydrated: state }),
        }),
        {
          name: 'auth-storage',
          storage: createJSONStorage(() => AsyncStorage),
          onRehydrateStorage: (state) => {
            return () => state.setHasHydrated(true)
          },
        }
    )
);