"use client";

import { ApiNewsItem } from "@/types/ApiNewsType/ApiNewsType";
import { AtomImage } from "@atoms";

interface NewsItemContentProps {
    content: ApiNewsItem['description'];
    image?: ApiNewsItem['images']['banner'][0];
}

export const NewsItemContent = ({ content, image }: NewsItemContentProps) => {
    return (
        <div className="news-item-content">
            {image && <AtomImage src={image} alt="Фото новини" variant="itemPage" />}
            {content && <div className="page-content" dangerouslySetInnerHTML={{ __html: content }} />}
            <div className="clear-both" />
        </div>
    )
}