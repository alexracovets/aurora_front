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
            <Container>
                <div>Завантаження галерей...</div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <div>Помилка завантаження галерей</div>
            </Container>
        );
    }
    return (
        <div className="grid grid-cols-4 gap-[20px]">
            {galleries.map((item: Gallery) => (
                <Link key={item.id} href={`/gallery/${item.slug}`} className="flex flex-col gap-[4px] bg-white rounded-[8px] overflow-hidden">
                    {item.image && typeof item.image === 'object' && (
                        <div className="relative w-full h-[150px] overflow-hidden">
                            <Image
                                src={item.image.url || ""}
                                alt={item.alt || ""}
                                fill
                                className="object-cover"
                                priority={true}
                            />
                        </div>
                    )}
                    <AtomText variant="galleryShowCaseTitle">
                        {item.title}
                    </AtomText>
                </Link>
            ))}
        </div>
    );
};