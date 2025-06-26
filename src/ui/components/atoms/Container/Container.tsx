"use client";

import { JustChildrenType } from "@types";
import { cn } from "@utils";

interface ContainerProps extends JustChildrenType {
    className?: string;
    space?: boolean;
    start?: boolean;
    full?: boolean;
}

export const Container = ({ children, className, space, start, full }: ContainerProps) => {
    return (
        <div className={cn(
            "w-full max-w-[1286px] mx-auto relative px-[16px]",
            "min-[1920px]:max-w-[128.6rem]",
            space && "py-[32px]",
            start && "pt-[66px]",
            full && "min-h-screen",
            className
        )}>
            {children}
        </div>
    )
}