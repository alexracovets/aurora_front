"use client";

import Image from "next/image";
import Link from "next/link";

import { Container, AtomText } from "@atoms";
import { useGetNextGalleries } from "@hooks";
import { Gallery } from "@payload-types";

export const ShowCaseGallery = () => {
    const { galleries, loading, error } = useGetNextGalleries();

    if (loading) {
        return (
            <Container className="max-w-[1760px]">
                <div>Завантаження галерей...</div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="max-w-[1760px]">
                <div>Помилка завантаження галерей</div>
            </Container>
        );
    }
    return (
        <Container space className="max-w-[1760px]">
            <div className="grid grid-cols-4 gap-[20px]">
                {galleries.map((item: Gallery) => (
                    <Link key={item.id} href={`/gallery/${item.slug}`} className="flex flex-col gap-[10px]">
                        {item.image && typeof item.image === 'object' && (
                            <div className="relative w-[420px] h-[230px] rounded-[20px] overflow-hidden">
                                <Image 
                                    src={item.image.url || ""} 
                                    alt={item.alt || ""} 
                                    fill 
                                    className="object-cover"
                                    priority={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                            </div>
                        )}
                        <AtomText variant="galleryTitle">
                            {item.title}
                        </AtomText>
                    </Link>
                ))}
            </div>
        </Container>
    );
};