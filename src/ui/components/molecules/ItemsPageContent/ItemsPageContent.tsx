"use client";

import { Award, Media, Page, Result } from "@payload-types";
import { RichTextItemType } from "@/types";
import { RichTextFilter } from "@molecules";
import Image from "next/image";

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
                <div className="relative w-[62.7rem] h-[32.9rem] rounded-[8px] overflow-hidden float-left mr-[38px] mb-[12px]">
                    <Image src={image.url || ''} alt={image.alt || ''} fill className="object-cover" />
                </div>
            )}
            {contentData.map((item: RichTextItemType, idx: number) => {
                return <RichTextFilter item={item} key={idx} />
            })}
        </div>
    )
}