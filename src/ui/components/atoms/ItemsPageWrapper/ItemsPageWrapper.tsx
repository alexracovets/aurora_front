"use client";

import { Container } from "@atoms";

interface ItemsPageWrapperProps {
    children: React.ReactNode;
    transparent?: boolean;
}

export const ItemsPageWrapper = ({ children, transparent }: ItemsPageWrapperProps) => {
    return (
        <Container padding roundedBottom transparent={transparent}>
            <div className="flex flex-col pt-[24px] w-full">
                {children}
            </div>
        </Container>
    );
};