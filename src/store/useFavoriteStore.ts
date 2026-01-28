import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface FavoriteState {
  favorites: number[];
  toggleFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (productId) => {
        const { favorites } = get();
        const isFav = favorites.includes(productId);
        if (isFav) {
          set({ favorites: favorites.filter((id) => id !== productId) });
        } else {
          set({ favorites: [...favorites, productId] });
        }
      },
      isFavorite: (productId) => {
        return get().favorites.includes(productId);
      },
    }),
    {
      name: "favorite-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
