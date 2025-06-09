"use client";

import { cn } from "@/lib/utils";
import { JustChildrenType } from "@types";

interface ContainerProps extends JustChildrenType {
    className?: string;
    space?: boolean;
}

export const Container = ({ children, className, space }: ContainerProps) => {
    return (
        <div className={cn(
            "w-full max-w-[1760px] mx-auto",
            space && "py-[32px]",
            className
        )}>
            {children}
        </div>
    )
}