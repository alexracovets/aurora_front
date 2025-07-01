"use client";

import { ArrowTo, ItemsPageWrapper, AtomLink } from "@atoms";

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return (
        <ItemsPageWrapper transparent>
            <AtomLink variant="toBack" href={`/gallery`}>
                <ArrowTo back /> Назад
            </AtomLink>
            {children}
        </ItemsPageWrapper>
    );
};