"use client";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import { cn } from "@utils";

interface ArrowToProps {
    className?: string;
    back?: boolean;
}

export const ArrowTo = ({ className, back }: ArrowToProps) => {
    return (
        <>
            {back ? (
                <GoArrowLeft className={cn("text-[24px] text-yellow", className)} />
            ) : (
                <GoArrowRight className={cn("text-[24px] text-yellow", className)} />
            )}
        </>
    )
}