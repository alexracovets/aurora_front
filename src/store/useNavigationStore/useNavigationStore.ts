import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Page } from "@/payload-types";

interface NavigationStoreType {
  navigation: {
    id: number;
    name: string;
    slug: string;
  }[];
  // loadNavigation: () => Promise<void>;
}

const getNavigation = async () => {
  const response = await fetch('/api/globals/header');
  const data = await response.json();
  return data.page || [];
}

export const useNavigationStore = create<NavigationStoreType>()(
  immer((set) => ({
    navigation: [
      { id: 7, name: 'Новини', slug: 'news' },
      { id: 3, name: 'Результати роботи', slug: 'results' },
      { id: 4, name: 'Відзнаки', slug: 'awards' },
      { id: 5, name: ' Партнери', slug: 'partners' },
      { id: 6, name: 'Фото', slug: 'gallery' },
      { id: 2, name: 'Правила', slug: 'rules' }
    ],
    // loadNavigation: async () => {
    //   const navigation = await getNavigation();

    //   set({
    //     navigation: navigation.map((page: Page) => ({
    //       id: page.id,
    //       name: page.name,
    //       slug: page.slug,
    //     }))
    //   });
    // },
  }))
);
