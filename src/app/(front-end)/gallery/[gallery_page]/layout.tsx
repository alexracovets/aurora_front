"use client";

import { ArrowTo, AtomButton, ItemsPageWrapper, AtomLink } from "@atoms";
import { JustChildrenType } from "@types";

export default function GalleryLayout({ children }: JustChildrenType) {
    return (
        <ItemsPageWrapper transparent>
            <AtomLink variant="toBack" href={`/gallery`}>
                <ArrowTo back /> Назад
            </AtomLink>
            {children}
        </ItemsPageWrapper>
    );
};