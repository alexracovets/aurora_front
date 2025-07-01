"use client";

import { JustChildrenType } from "@types";
import { cn } from "@utils";

interface ContainerProps extends JustChildrenType {
    className?: string;
    padding?: boolean;
    transparent?: boolean;
    roundedBottom?: boolean;
    roundedTop?: boolean;
    fixHeader?: boolean;
}

export const Container = ({ children, className, padding, transparent, roundedBottom, roundedTop, fixHeader }: ContainerProps) => {
    const adaptiveWidth = cn(
        "w-full max-w-[1366px] mx-auto relative",
        "min-[1920px]:max-w-[136.6rem]",
    )
    return (
        <div className={cn(
            adaptiveWidth,
            "px-[40px] my-[32px]",
            roundedBottom && "rounded-b-[16px]",
            roundedTop && "rounded-t-[16px]",
            padding && "py-[32px]",
            transparent ? "bg-transparent" : "bg-white",
            fixHeader && "pt-[32px]",
            className
        )}>
            {children}
        </div>
    )
}