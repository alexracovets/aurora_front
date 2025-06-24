"use client";

import { getGalleries } from "@utils";
import { Gallery } from "@payload-types";
import { useEffect, useState } from "react";
import { GalleryItem } from "@molecules";
import { GalleryWrapper } from "@atoms";

export const GalleryBlock = () => {
    const [galleries, setGalleries] = useState<Gallery[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGalleries = async () => {
            try {
                const galleriesData = await getGalleries();
                setGalleries(galleriesData);
            } catch (error) {
                console.error('Error fetching galleries:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGalleries();
    }, []);

    if (loading) {
        return <div>Завантаження галереї...</div>;
    }

    return (
        <GalleryWrapper>
            {galleries.map((item) => (
                <GalleryItem key={item.id} {...item} />
            ))}
        </GalleryWrapper>
    );
};