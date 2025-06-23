"use client";

import Link from "next/link";

import { Container, AtomText, FullscreenImage } from "@atoms";
import { useGetNextGalleries } from "@hooks";

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
                {galleries.map((item) => (
                    <Link key={item.id} href={`/gallery/${item.slug}`} className="flex flex-col gap-[10px]">
                        <div className="relative w-[420px] h-[230px] rounded-[20px] overflow-hidden">
                            <FullscreenImage 
                                src={item.url || ""} 
                                alt={item.alt || ""} 
                                className="w-full h-full"
                            />
                        </div>
                        <AtomText variant="galleryTitle">
                            {item.title}
                        </AtomText>
                    </Link>
                ))}
            </div>
        </Container>
    );
};