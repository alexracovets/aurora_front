"use client";

export const PartnersWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="gap-[20px] grid grid-cols-2">
            {children}
        </div>
    )
}