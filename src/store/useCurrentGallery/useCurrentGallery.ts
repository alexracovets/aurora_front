import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface GalleryStoreType {
    currentGallery: string | null;
    setCurrentGallery: (gallery: string) => void;
}

export const useCurrentGallery = create<GalleryStoreType>()(
    immer((set) => ({
        currentGallery: null,
        setCurrentGallery: (gallery: string) => set({ currentGallery: gallery })
    }))
);
