"use client";

import { JustChildrenType } from "@types";
import { cn } from "@utils";

interface ContainerProps extends JustChildrenType {
    className?: string;
    space?: boolean;
    spaceTop?: boolean;
    spaceBottom?: boolean;
}

export const Container = ({ children, className, space, spaceTop, spaceBottom }: ContainerProps) => {
    const adaptiveWidth = cn(
        "w-full max-w-[1286px] mx-auto relative",
        "min-[1920px]:max-w-[128.6rem]",
    )
    return (
        <>
            {spaceTop && <div
                className={cn(
                    adaptiveWidth,
                    "h-[48px] bg-yellow z-[-1]"
                )}
            />}
            <div className={cn(
                adaptiveWidth,
                "bg-white px-[16px]",
                spaceTop && "rounded-t-[16px] mt-[-16px]",
                spaceBottom && "rounded-b-[16px] mb-[-16px]",
                space && "py-[32px]",
                className
            )}>
                {children}
            </div>
            {spaceBottom && <div
                className={cn(
                    adaptiveWidth,
                    "h-[48px] bg-yellow z-[-1]"
                )}
            />}
        </>
    )
}