"use client";

import { ApiNewsItem } from "@/types/ApiNewsType/ApiNewsType";
import Image from "next/image";

interface NewsItemContentProps {
    content: ApiNewsItem['description'];
    image?: ApiNewsItem['images']['banner'][0];
}

export const NewsItemContent = ({ content, image }: NewsItemContentProps) => {
    return (
        <div className="news-item-content">
            {
                image && (
                    <div className="w-[629px] h-[329px] relative rounded-[8px] overflow-hidden float-left mr-[38px] mb-[12px]">
                        <Image src={image} alt="Фото новини" fill className="object-cover" />
                    </div>
                )
            }
            {
                content && (
                    <div className="page-content"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                )
            }
            <div className="clear-both" />
        </div>
    )
}