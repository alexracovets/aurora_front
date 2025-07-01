"use client";

import { Award, Media, Page, Result } from "@payload-types";
import { RichTextItemType } from "@/types";
import { RichTextFilter } from "@molecules";
import { AtomImage } from "@atoms";

import "@styles/news_content.scss";

interface ItemsPageContentProps {
    content: Result['content'] | Page['content'] | Award['content'];
    image: Media;
}

export const ItemsPageContent = ({ content, image }: ItemsPageContentProps) => {
    if (!content) return null;

    const contentData = content.root?.children;
    if (!contentData) return null;

    return (
        <div className="block mb-[40px]">
            {image && (
                <AtomImage
                    src={image.url || ''}
                    alt={image.alt || ''}
                    variant="itemPage"
                />
            )}
            {contentData.map((item: RichTextItemType, idx: number) => {
                return <RichTextFilter item={item} key={idx} />
            })}
        </div>
    )
}