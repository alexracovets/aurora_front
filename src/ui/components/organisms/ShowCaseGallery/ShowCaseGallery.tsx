"use client";

import Link from "next/link";

import { Container, AtomText, AtomImage } from "@atoms";
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
                    {typeof item.image === 'object' && (
                        <AtomImage src={item.image.url || ""} alt={item.alt || ""} variant="showCaseGallery" />
                    )}
                    <AtomText variant="galleryShowCaseTitle">
                        {item.title}
                    </AtomText>
                </Link>
            ))}
        </div>
    );
};