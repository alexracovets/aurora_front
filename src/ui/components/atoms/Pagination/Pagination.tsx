import * as React from "react";
import { MoreHorizontalIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@utils"
import { AtomButton } from "@atoms"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
    return (
        <nav
            role="navigation"
            aria-label="pagination"
            data-slot="pagination"
            className={cn("mx-auto flex w-full justify-center", className)}
            {...props}
        />
    )
}

function PaginationContent({
    className,
    ...props
}: React.ComponentProps<"ul">) {
    return (
        <ul
            data-slot="pagination-content"
            className={cn("flex flex-row items-center gap-[25px]", className)}
            {...props}
        />
    )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
    return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
    isActive?: boolean
    disabled?: boolean
} & Pick<React.ComponentProps<typeof AtomButton>, "variant"> &
    React.ComponentProps<typeof Link>

function PaginationLink({
    className,
    isActive,
    variant = "default",
    disabled,
    ...props
}: PaginationLinkProps) {
    // const Component = disabled ? 'span' : Link;
    const Component = 'span';

    return (
        <Component
            aria-current={isActive ? "page" : undefined}
            data-slot="pagination-link"
            data-active={isActive}
            className={cn(
                "w-[65px] h-[65px] rounded-[50%] flex justify-center items-center bg-white border-none text-[32px] font-semibold cursor-pointer select-none",
                "hover:scale-[1.1] transition-all duration-300 will-change-transform",
                disabled && "pointer-events-none opacity-50",
                className
            )}
            {...props}
        />
    )
}

function PaginationPrevious({
    className,
    disabled,
    ...props
}: React.ComponentProps<typeof PaginationLink>) {
    return (
        <PaginationLink
            aria-label="Go to previous page"
            variant="default"
            className={cn("mr-[10px]", className)}
            disabled={disabled}
            {...props}
        >
            <div className="w-[23px]">
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM25 13.5C25.8284 13.5 26.5 12.8284 26.5 12C26.5 11.1716 25.8284 10.5 25 10.5L25 13.5ZM2 12L2 13.5L25 13.5L25 12L25 10.5L2 10.5L2 12Z" fill="#84827F" />
                </svg>
            </div>
        </PaginationLink>
    )
}

function PaginationNext({
    className,
    disabled,
    ...props
}: React.ComponentProps<typeof PaginationLink>) {
    return (
        <PaginationLink
            aria-label="Go to next page"
            variant="default"
            className={cn("ml-[10px]", className)}
            disabled={disabled}
            {...props}
        >
            <div className="w-[23px]">
                <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.0607 10.9393C26.6464 11.5251 26.6464 12.4749 26.0607 13.0607L16.5147 22.6066C15.9289 23.1924 14.9792 23.1924 14.3934 22.6066C13.8076 22.0208 13.8076 21.0711 14.3934 20.4853L22.8787 12L14.3934 3.51472C13.8076 2.92893 13.8076 1.97918 14.3934 1.3934C14.9792 0.807611 15.9289 0.807611 16.5147 1.3934L26.0607 10.9393ZM2 13.5C1.17157 13.5 0.5 12.8284 0.5 12C0.5 11.1716 1.17157 10.5 2 10.5L2 13.5ZM25 12L25 13.5L2 13.5L2 12L2 10.5L25 10.5L25 12Z" fill="#84827F" />
                </svg>
            </div>
        </PaginationLink>
    )
}

function PaginationEllipsis({
    className,
    ...props
}: React.ComponentProps<"span">) {
    return (
        <span
            aria-hidden
            data-slot="pagination-ellipsis"
            className={cn("flex size-9 items-center justify-center", className)}
            {...props}
        >
            <MoreHorizontalIcon className="size-4" />
            <span className="sr-only">More pages</span>
        </span>
    )
}

export {
    Pagination,
    PaginationContent,
    PaginationLink,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
}
