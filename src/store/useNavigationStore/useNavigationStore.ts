import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Page } from "@/payload-types";

interface NavigationStoreType {
  navigation: Page[];
  loadNavigation: () => Promise<void>;
}

const getNavigation = async () => {
  const response = await fetch('/api/header');
  const data = await response.json();
  return data.docs;
}

export const useNavigationStore = create<NavigationStoreType>()(
  immer((set) => ({
    navigation: [],
    loadNavigation: async () => {
      const navigation = await getNavigation();
      console.log(navigation)
      set({
        navigation: navigation[0].page.map((page: Page) => ({
          id: page.id,
          name: page.name,
          slug: page.slug,
        }))
      });
    },
  }))
);
