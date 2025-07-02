"use client";

export const ResultsWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="gap-[16px] flex flex-col">
            {children}
        </div>
    )
};