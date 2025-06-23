"use client";

import Link from "next/link";

import { AtomText, FullscreenImage } from "@atoms";
import { getGalleries } from "@utils";
import { Gallery } from "@payload-types";
import { useEffect, useState } from "react";

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
        <div className="grid grid-cols-3 gap-[20px]">
            {galleries.map((item) => (
                <Link href={`/gallery/${item.slug}`} key={item.id}>
                    <div key={item.id} className="flex flex-col gap-[10px]">
                        <div className="relative w-[573px] h-[310px] rounded-[20px] overflow-hidden">
                            <FullscreenImage 
                                src={item.url || ''} 
                                alt={item.alt} 
                                className="w-full h-full"
                            />
                        </div>
                        <AtomText variant="galleryTitle">
                            {item.title}
                        </AtomText>
                    </div>
                </Link>
            ))}
        </div>
    )
}