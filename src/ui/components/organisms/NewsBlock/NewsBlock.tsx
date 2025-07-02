"use client"

import { PaginationBlock } from "@organisms";
import { NewsItem } from "@molecules";
import { NewsWrapper } from "@atoms";
import { ApiNewsResponse } from "@/types";

const RESULTS_PER_PAGE = 6;

export const NewsBlock = ({ newsData }: { newsData: ApiNewsResponse }) => {
    return (
        <div className="flex flex-col w-full gap-y-[16px]">
            <PaginationBlock
                items={newsData.data}
                countItemsPerPage={RESULTS_PER_PAGE}
                ItemComponent={NewsItem}
                WrapperItems={NewsWrapper}
            />
        </div>
    );
};