"use client";

export const GalleryWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="gap-[16px] grid grid-cols-3">
            {children}
        </div>
    );
};