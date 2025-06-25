"use client";

import { RichTextItemType } from "@/types";
import { Page, Result } from "@payload-types";
import { RichTextFilter } from "@molecules";

interface ItemsPageContentProps {
    content: Result['content'] | Page['content'];
    image: Result['image'];
}

export const ItemsPageContent = ({ content, image }: ItemsPageContentProps) => {
    if (!content) return null;

    const contentData = content.root?.children;
    if (!contentData) return null;
    
    return (
        <div className="flex flex-col gap-y-[16px] mb-[40px]">
            {contentData.map((item: RichTextItemType, idx: number) => {
                return <RichTextFilter item={item} key={idx} />
            })}
        </div>
    )
}