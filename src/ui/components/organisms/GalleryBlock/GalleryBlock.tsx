"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AtomText } from "@atoms";
import { Gallery } from "@payload-types";

export const GalleryBlock = () => {
    const [items, setItems] = useState<Gallery[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await fetch('/api/gallery');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-3 gap-[20px]">
            {items.map((item) => (
                <Link href={`/gallery/${item.slug}`} key={item.id}>
                    <div key={item.id} className="flex flex-col gap-[10px]">
                        <div className="relative w-[573px] h-[310px] rounded-[20px] overflow-hidden">
                            <Image src={item.url || ''} alt={item.alt} fill />
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