import * as React from "react";
import { MoreHorizontalIcon } from "lucide-react";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import Link from "next/link";

import { cn } from "@utils"
import { AtomButton } from "@atoms";

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
            className={cn("flex flex-row items-center gap-[16px]", className)}
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
                "w-[4rem] h-[4rem] rounded-[50%] flex justify-center items-center bg-white border-none text-[1.6rem] font-semibold cursor-pointer select-none",
                "hover:scale-[1.1] hover:bg-yellow transition-all duration-300 will-change-transform",
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
            <LuArrowLeft size={"2.4rem"} className="text-black" />
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
            <LuArrowRight size={"2.4rem"} className="text-black" />
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
