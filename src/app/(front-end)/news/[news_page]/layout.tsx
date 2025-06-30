"use client";

import { MoveLeft } from "lucide-react";
import Link from "next/link";

import { AtomButton, ItemsPageWrapper } from "@atoms";
import { JustChildrenType } from "@types";

export default function NewsLayout({ children }: JustChildrenType) {
    return (
        <ItemsPageWrapper>
            <AtomButton variant="toBack" asChild>
                <Link href={`/news`}>
                    <MoveLeft className="w-[24px] text-yellow" />
                    Назад
                </Link>
            </AtomButton>
            {children}
        </ItemsPageWrapper>
    );
};