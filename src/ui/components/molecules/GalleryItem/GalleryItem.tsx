"use client";

import { Gallery } from "@/payload-types";
import Link from "next/link";

import { AtomText, AtomImage } from "@atoms";

export const GalleryItem = ({ title, image, alt, slug }: Gallery) => {

    return (
        <Link href={`/gallery/${slug}`}>
            <div className="flex flex-col justify-center items-center">
                {
                    image &&
                    typeof image !== 'number' &&
                    <AtomImage
                        src={image.url || ''}
                        alt={alt || ''}
                        className="w-full h-[220px] rounded-t-[8px] overflow-hidden"
                    />
                }
                <AtomText variant="cardTitle" className={"bg-white rounded-b-[8px] p-[8px] w-full text-center"}>
                    {title}
                </AtomText>
            </div>
        </Link>
    )
}