"use client";

import { JustChildrenType } from "@/types";
import Link from "next/link";
import { cn } from "@utils";
import { cva, type VariantProps } from "class-variance-authority";

interface AtomLinkProps extends JustChildrenType {
    href: string;
    className?: string;
    variant?: VariantProps<typeof linksVariants>["variant"];
}

const linksVariants = cva(
    "block",
    {
        variants: {
            variant: {
                default: "",
                navigation: cn(
                    "text-[16px] p-[9px] rounded-[8px] bg-transparent",
                    "hover:bg-bage transition-colors duration-300"
                )
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export const AtomLink = ({ href, className, variant, ...props }: AtomLinkProps) => {
    return (
        <Link
            href={href}
            className={cn(linksVariants({ variant, className }))}
            {...props}
        />
    )
}