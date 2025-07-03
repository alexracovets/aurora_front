"use client";

import { Suspense } from "react";

import { PaginationBlock } from "@organisms";
import { Partner } from "@/payload-types";
import { PartnerItem } from "@molecules";
import { PartnersWrapper } from "@atoms";

interface PartnersBlockProps {
    items: Partner[]
};

export const PartnersBlock = ({ items }: PartnersBlockProps) => {
    const PARTNERS_PER_PAGE = 6;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {items && <PaginationBlock items={items} countItemsPerPage={PARTNERS_PER_PAGE} ItemComponent={PartnerItem} WrapperItems={PartnersWrapper} />}
        </Suspense>
    );
}