"use client";

import { MoveLeft } from "lucide-react";
import Link from "next/link";

import { AtomButton, ItemsPageWrapper } from "@atoms";
import { JustChildrenType } from "@types";

export default function GalleryLayout({ children }: JustChildrenType) {
    return (
        <ItemsPageWrapper>
            <AtomButton variant="toBack" asChild>
                <Link href={`/gallery`}>
                    <MoveLeft className="w-[24px] text-yellow" />
                    Назад
                </Link>
            </AtomButton>
            {children}
        </ItemsPageWrapper>
    );
};