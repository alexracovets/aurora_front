"use client";

import Link from "next/link";

import { AtomText, AtomImage } from "@atoms";
import { Gallery } from "@payload-types";

interface ShowCaseGalleryProps {
    galleries: Gallery[];
}

export const ShowCaseGallery = ({ galleries }: ShowCaseGalleryProps) => {

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