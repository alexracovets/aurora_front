"use client";

import { useState } from "react";

import { PagitationComponent } from "@molecules";

interface PaginationBlockProps<T> {
    items: T[];
    countItemsPerPage: number;
    ItemComponent: React.ComponentType<T>;
    WrapperItems: React.ComponentType<{ children: React.ReactNode }>;
}

export const PaginationBlock = <T,>({ items, countItemsPerPage, ItemComponent, WrapperItems }: PaginationBlockProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / countItemsPerPage);
    const startIndex = (currentPage - 1) * countItemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + countItemsPerPage);

    return (
        <div className="flex flex-col w-full gap-y-[32px]">
            <PagitationComponent
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
            <WrapperItems>
                {currentItems.map((item, idx) => <ItemComponent key={idx} {...item} />)}
            </WrapperItems> 
        </div>
    )
}