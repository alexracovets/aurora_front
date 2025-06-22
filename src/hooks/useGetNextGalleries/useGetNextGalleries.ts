import { useState, useEffect } from "react";
import { useCurrentGallery } from "@store";
import { Gallery } from "@/payload-types";
import { getGalleriesNext } from "@utils";

export const useGetNextGalleries = () => {
    const { currentGallery } = useCurrentGallery();
    const [galleries, setGalleries] = useState<Gallery[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!currentGallery) {
            setGalleries([]);
            setError(null);
            return;
        }

        const fetchGalleries = async () => {
            setLoading(true);
            setError(null);

            try {
                const result = await getGalleriesNext(currentGallery, 4);

                if (result.success && result.data) {
                    setGalleries(result.data);
                }
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Помилка завантаження галерей'));
                setGalleries([]);
            } finally {
                setLoading(false);
            }
        };

        fetchGalleries();
    }, [currentGallery]);

    return { galleries, loading, error };
};
