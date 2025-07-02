"use client";

export const NewsWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-3 gap-[16px] w-full">
            {children}
        </div>
    );
};