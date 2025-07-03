"use client"

import { PaginationBlock } from "@organisms";
import { NewsItem } from "@molecules";
import { NewsWrapper } from "@atoms";
import { ApiNewsItem } from "@/types";

const RESULTS_PER_PAGE = 6;

interface NewsBlockProps {
    items: ApiNewsItem[];
}

export const NewsBlock = ({ items }: NewsBlockProps) => {
    return (
        <div className="flex flex-col w-full gap-y-[16px]">
            <PaginationBlock
                items={items}
                countItemsPerPage={RESULTS_PER_PAGE}
                ItemComponent={NewsItem}
                WrapperItems={NewsWrapper}
            />
        </div>
    );
};