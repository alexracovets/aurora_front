"use client";

import { Suspense } from "react";

import { PaginationBlock } from "@organisms";
import { Gallery } from "@payload-types";
import { GalleryItem } from "@molecules";
import { GalleryWrapper } from "@atoms";

interface GalleryBlockProps {
    items: Gallery[]
};

export const GalleryBlock = ({ items }: GalleryBlockProps) => {
    const GALLERIES_PER_PAGE = 6;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {items && <PaginationBlock items={items} countItemsPerPage={GALLERIES_PER_PAGE} ItemComponent={GalleryItem} WrapperItems={GalleryWrapper} />}
        </Suspense>
    );
};