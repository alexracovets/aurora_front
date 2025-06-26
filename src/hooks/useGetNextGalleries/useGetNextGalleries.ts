"use client";

import { useState, useEffect, useMemo } from "react";
import { useCurrentGallery } from "@store";
import { Gallery } from "@/payload-types";
import { getGalleriesNext } from "@utils";

// Кеш для зберігання результатів запитів
const galleriesCache = new Map<string, Gallery[]>();

export const useGetNextGalleries = () => {
    const { currentGallery } = useCurrentGallery();
    const [galleries, setGalleries] = useState<Gallery[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    // Перевіряємо кеш перед завантаженням
    const cachedGalleries = useMemo(() => {
        if (!currentGallery) return null;
        return galleriesCache.get(currentGallery) || null;
    }, [currentGallery]);

    useEffect(() => {
        if (!currentGallery) {
            setGalleries([]);
            setError(null);
            setLoading(false);
            return;
        }

        // Якщо є кешовані дані, показуємо їх одразу
        if (cachedGalleries) {
            setGalleries(cachedGalleries);
            setLoading(false);
            setError(null);
        }

        const fetchGalleries = async () => {
            setError(null);

            try {
                const result = await getGalleriesNext(currentGallery, 4);

                if (result.success && result.data) {
                    setGalleries(result.data);
                    // Зберігаємо в кеш
                    galleriesCache.set(currentGallery, result.data);
                }
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Помилка завантаження галерей'));
                setGalleries([]);
            } finally {
                setLoading(false);
            }
        };

        // Запускаємо запит тільки якщо немає кешованих даних
        if (!cachedGalleries) {
            setLoading(true);
            fetchGalleries();
        }
    }, [currentGallery, cachedGalleries]);

    return { galleries, loading, error };
};
