"use client";

import { Container } from "@atoms";

export const ItemsPageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container space start full>
            <div className="flex flex-col pt-[24px] w-full">
                {children}
            </div>
        </Container>
    );
};