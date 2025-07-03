"use server";

import { getPayload } from "payload";
import config from "@/payload.config";
import { Gallery } from "@payload-types";

type NeighborGalleriesResult = {
    nextPage: Gallery | null;
    prevPage: Gallery | null;
};

export async function getNeighborGalleries(slug: string): Promise<NeighborGalleriesResult> {
    try {
        const payload = await getPayload({ config });

        // Знаходимо поточну галерею
        const currentGallery = await payload.find({
            collection: 'gallery',
            where: {
                slug: {
                    equals: slug
                }
            },
            limit: 1,
        });

        if (!currentGallery.docs.length) {
            return {
                nextPage: null,
                prevPage: null
            };
        }

        const currentGalleryId = currentGallery.docs[0].id;

        // Знаходимо наступну галерею (з меншим ID)
        const nextPage = await payload.find({
            collection: 'gallery',
            where: {
                id: {
                    less_than: currentGalleryId
                }
            },
            limit: 1,
            sort: '-id'
        });

        // Знаходимо попередню галерею (з більшим ID)
        const prevPage = await payload.find({
            collection: 'gallery',
            where: {
                id: {
                    greater_than: currentGalleryId
                }
            },
            limit: 1,
            sort: 'id'
        });

        return {
            nextPage: nextPage.docs[0] || null,
            prevPage: prevPage.docs[0] || null
        };
    } catch (error) {
        console.error('Помилка при отриманні сусідніх галерей:', error);
        return {
            nextPage: null,
            prevPage: null
        };
    }
} 