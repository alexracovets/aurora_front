"use client";

import { Gallery } from "@/payload-types";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AtomText } from "@atoms";
import { cn } from "@utils";

export const GalleryItem = ({ id, title, image, alt, slug }: Gallery) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Link href={`/gallery/${slug}`}>
            <div key={id} className="flex flex-col justify-center items-center">
                <div className={"relative w-full h-[220px] rounded-t-[8px] overflow-hidden"}>
                    {image && typeof image !== 'number' && (
                        <>
                            <Image
                                src={image.url || ''}
                                alt={alt || ''}
                                fill
                                className={cn(
                                    "object-cover z-0 transition-opacity duration-300",
                                    imageLoaded ? "opacity-100" : "opacity-0"
                                )}
                                onLoad={() => setImageLoaded(true)}
                                priority={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                            {!imageLoaded && (
                                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                            )}
                        </>
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