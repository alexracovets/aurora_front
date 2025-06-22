"use client";

import { MoveLeft } from "lucide-react";
import Link from "next/link";

import { AtomButton, Container } from "@atoms";
import { ShowCaseGallery } from "@organisms";
import { JustChildrenType } from "@types";

export default function GalleryLayout({ children }: JustChildrenType) {
    return (
        <Container space className="max-w-[1760px] gap-y-[40px]">
            <AtomButton variant="toBack" asChild>
                <Link href={`/gallery`}>
                    <MoveLeft className="w-[24px] text-yellow" />
                    Назад
                </Link>
            </AtomButton>
            {children}
            <ShowCaseGallery />
        </Container>
    );
};