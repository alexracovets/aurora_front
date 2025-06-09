"use client";

import { cn } from "@/lib/utils";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@atoms";

interface PagitationComponentProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const PagitationComponent = ({ totalPages, currentPage, onPageChange }: PagitationComponentProps) => {

    const getPages = () => {
        if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);

        const pages = [];

        if (currentPage <= 3) {
            pages.push(1, 2, 3, 4, "...", totalPages);
        } else if (currentPage >= totalPages - 2) {
            pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
            pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
        }

        return pages;
    };

    const pages = getPages();

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    />
                </PaginationItem>

                {pages.map((page, i) => (
                    <PaginationItem key={i}>
                        {typeof page === "string" ? (
                            <PaginationEllipsis />
                        ) : (
                            <PaginationLink
                                href="#"
                                isActive={page === currentPage}
                                onClick={() => onPageChange(page)}
                                className={cn(
                                    currentPage === page && "bg-yellow transition-all duration-300"
                                )}
                            >
                                {page}
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
};