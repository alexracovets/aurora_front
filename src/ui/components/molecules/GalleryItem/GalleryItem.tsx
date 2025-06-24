"use client";

import { Gallery } from "@/payload-types";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AtomText } from "@atoms";
import { cn } from "@utils";

export const GalleryItem = ({ id, title, image, alt, slug }: Gallery) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Link
            href={`/gallery/${slug}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div key={id} className="flex flex-col justify-center items-center">
                <div className={"relative w-full h-[250px] rounded-t-[8px] overflow-hidden"}>
                    {image && typeof image !== 'number' && (
                        <Image src={image.url || ''} alt={alt || ''} fill className="object-cover z-0" />
                    )}
                </div>
                <AtomText
                    variant="cardTitle"
                    className={"bg-white rounded-b-[8px] p-[8px] w-full text-center"}
                >
                    {title}
                </AtomText>
            </div>
        </Link>
    )
}