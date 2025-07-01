"use client";

import { AtomLink, ItemsPageWrapper, ArrowTo } from "@atoms";
import { JustChildrenType } from "@types";

export default function NewsLayout({ children }: JustChildrenType) {
    return (
        <ItemsPageWrapper>
            <AtomLink variant="toBack" href={`/results`}>
                <ArrowTo back /> Назад
            </AtomLink>
            {children}
        </ItemsPageWrapper>
    );
};