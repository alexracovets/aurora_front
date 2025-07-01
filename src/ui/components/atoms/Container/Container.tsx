"use client";

import { JustChildrenType } from "@types";
import { cn } from "@utils";

interface ContainerProps extends JustChildrenType {
    className?: string;
    space?: boolean;
    transparent?: boolean;
    roundedBottom?: boolean;
    roundedTop?: boolean;
}

export const Container = ({ children, className, space, transparent, roundedBottom, roundedTop }: ContainerProps) => {
    const adaptiveWidth = cn(
        "w-full max-w-[1286px] mx-auto relative",
        "min-[1920px]:max-w-[128.6rem]",
    )
    return (
        <div className={cn(
            adaptiveWidth,
            "px-[16px] py-[32px]",
            roundedBottom && "rounded-b-[16px]",
            roundedTop && "rounded-t-[16px]",
            space && "my-[32px]",
            transparent ? "bg-transparent" : "bg-white",
            className
        )}>
            {children}
        </div>
    )
}