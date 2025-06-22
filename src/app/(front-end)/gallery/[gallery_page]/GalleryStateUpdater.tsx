"use client";

import { useEffect } from "react";
import { useCurrentGallery } from "@/store";

interface GalleryStateUpdaterProps {
    slug: string;
}

export function GalleryStateUpdater({ slug }: GalleryStateUpdaterProps) {
    const { setCurrentGallery } = useCurrentGallery();

    useEffect(() => {
        setCurrentGallery(slug);
    }, [slug, setCurrentGallery]);

    return null;
} 