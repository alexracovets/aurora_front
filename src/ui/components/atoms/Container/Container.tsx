"use client";

import { JustChildrenType } from "@types";

interface ContainerProps extends JustChildrenType {
    className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`w-full max-w-[1280px] mx-auto ${className}`}>
            {children}
        </div>
    )
}