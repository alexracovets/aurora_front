"use client";

import { Suspense } from "react";

import { PaginationBlock } from "@organisms";
import { Award } from "@/payload-types";
import { AwardItem } from "@molecules";
import { AwardsWrapper } from "@atoms";

interface AwardsBlockProps {
    items: Award[];
};

export const AwardsBlock = ({ items }: AwardsBlockProps) => {
    const AWARDS_PER_PAGE = 8;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {items && <PaginationBlock items={items} countItemsPerPage={AWARDS_PER_PAGE} ItemComponent={AwardItem} WrapperItems={AwardsWrapper} />}
        </Suspense>
    );
};