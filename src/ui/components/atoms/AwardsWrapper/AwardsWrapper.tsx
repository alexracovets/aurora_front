"use client";

export const AwardsWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="gap-[20px] grid grid-cols-3">
            {children}
        </div>
    )
};