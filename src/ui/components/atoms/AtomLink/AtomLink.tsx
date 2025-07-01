"use client";

import { JustChildrenType } from "@/types";
import Link from "next/link";
import { cn } from "@utils";
import { cva, type VariantProps } from "class-variance-authority";

interface AtomLinkProps extends JustChildrenType {
    href: string;
    className?: string;
    variant?: VariantProps<typeof linksVariants>["variant"];
    target?: string;
}

const linksVariants = cva(
    "block leading-[1]",
    {
        variants: {
            variant: {
                default: "",
                navigation: cn(
                    "text-[16px] p-[9px] rounded-[8px] bg-transparent",
                    "hover:bg-bage transition-colors duration-300"
                ),
                footerNavigation: cn(
                    "text-[16px]"
                ),
                footerLink: cn(
                    "relative text-[16px]",
                    "before:content-[''] before:absolute before:left-0 before:top-1/2 before:translate-x-[-200%] before:-translate-y-1/2 before:w-[16px] before:h-[16px] before:bg-yellow before:rounded-full"
                ),
                footerCall: cn(
                    "text-[20px] underline font-semibold"
                ),
                footerMail: cn(
                    "text-[20px] font-semibold"
                ),
                cardLink: cn(
                    "absolute bottom-0 left-0 w-full h-[48px] bg-white rounded-[8px] py-[8px] flex flex-col gap-[8px]",
                    "transition transition-[300ms] ease-in",
                    "hover:text-yellow"
                ),
                toBack: cn(
                    "flex items-center gap-x-[12px] bg-transparent text-[16px] border border-none"
                ),
                social: cn(
                    "text-[3.6rem] text-yellow"
                )
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export const AtomLink = ({ href, className, variant, target, ...props }: AtomLinkProps) => {
    return (
        <Link
            href={href}
            className={cn(linksVariants({ variant, className }))}
            {...props}
        />
    )
}