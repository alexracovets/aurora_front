"use client"

import { PaginationBlock } from "@organisms";
import { NewsItem } from "@molecules";
import { NewsData } from "@data";
import { NewsWrapper } from "@atoms";

const RESULTS_PER_PAGE = 6;

export const NewsBlock = () => {
    
    return (
        <div className="flex flex-col w-full gap-y-[16px]">
            <PaginationBlock items={NewsData} countItemsPerPage={RESULTS_PER_PAGE} ItemComponent={NewsItem} WrapperItems={NewsWrapper} />
        </div>
    );
};