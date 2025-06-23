"use client";

import { cn } from "@/lib/utils";
import { JustChildrenType } from "@types";

interface ContainerProps extends JustChildrenType {
    className?: string;
    space?: boolean;
    start?: boolean;
    full?: boolean;
}

export const Container = ({ children, className, space, start, full }: ContainerProps) => {
    return (
        <div className={cn(
            "w-full max-w-[1286px] mx-auto",
            "min-[1920px]:max-w-[128.6rem]",
            space && "py-[32px]",
            start && "pt-[66px]",
            full && "h-screen",
            className
        )}>
            {children}
        </div>
    )
}