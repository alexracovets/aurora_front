"use client";

import { useState } from "react";
import { PagitationComponent } from "@molecules";

interface PaginationBlockProps {
    items: any[];
    countItemsPerPage: number;
    ItemComponent: React.ComponentType<any>;
    WrapperItems: React.ComponentType<any>;
}

export const PaginationBlock = ({ items, countItemsPerPage, ItemComponent, WrapperItems }: PaginationBlockProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / countItemsPerPage);
    const startIndex = (currentPage - 1) * countItemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + countItemsPerPage);
    return (
        <div className="flex flex-col w-full gap-y-[32px]">
            <WrapperItems>
                {currentItems.map((item, idx) => <ItemComponent key={item.id || idx} {...item} />)}
            </WrapperItems>
            <PagitationComponent
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    )
}