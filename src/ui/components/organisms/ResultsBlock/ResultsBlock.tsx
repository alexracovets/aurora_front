"use client";

import { Suspense } from "react";

import { PaginationBlock } from "@organisms";
import { Result } from "@/payload-types";
import { ResultItem } from "@molecules";
import { ResultsWrapper } from "@atoms";

interface ResultsBlockProps {
    items: Result[];
};

export const ResultsBlock = ({ items }: ResultsBlockProps) => {
    const RESULTS_PER_PAGE = 3;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {items && <PaginationBlock items={items} countItemsPerPage={RESULTS_PER_PAGE} ItemComponent={ResultItem} WrapperItems={ResultsWrapper} />}
        </Suspense>
    );
};