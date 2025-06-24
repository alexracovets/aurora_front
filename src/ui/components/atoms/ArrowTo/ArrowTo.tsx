"use client";

import { GoArrowRight } from "react-icons/go";

import { cn } from "@utils";

export const ArrowTo = ({ className }: { className?: string }) => {
    return (
        <GoArrowRight className={cn("text-[24px] text-yellow", className)} />
    )
}