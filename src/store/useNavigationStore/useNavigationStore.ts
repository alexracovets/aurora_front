import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface NavigationStoreType {
  navigation: {
    id: number;
    name: string;
    slug: string;
  }[];
}

export const useNavigationStore = create<NavigationStoreType>()(
  immer(() => ({
    navigation: [
      { id: 7, name: 'Новини', slug: 'news' },
      { id: 3, name: 'Результати роботи', slug: 'results' },
      { id: 4, name: 'Відзнаки', slug: 'awards' },
      { id: 5, name: ' Партнери', slug: 'partners' },
      { id: 6, name: 'Фото', slug: 'gallery' },
      { id: 2, name: 'Правила', slug: 'rules' }
    ],
  }))
);
