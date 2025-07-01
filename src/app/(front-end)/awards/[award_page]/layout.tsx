"use client";

import { ItemsPageWrapper } from "@atoms";
import { JustChildrenType } from "@types";

export default function AwardLayout({ children }: JustChildrenType) {
    return (
        <ItemsPageWrapper>
            {children}
        </ItemsPageWrapper>
    );
};