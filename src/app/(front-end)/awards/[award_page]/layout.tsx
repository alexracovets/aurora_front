"use client";

import { ItemsPageWrapper } from "@atoms";

export default function AwardLayout({ children }: { children: React.ReactNode }) {
    return (
        <ItemsPageWrapper>
            {children}
        </ItemsPageWrapper>
    );
};