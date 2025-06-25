"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@utils"

const textVariants = cva(
    "leading-[1.1]",
    {
        variants: {
            variant: {
                default:
                    "text-[16px]",
                headerH1:
                    "text-[60px] font-semibold text-left pt-[60px] pb-[16px] mb-[16px]",
                headerH3:
                    "text-[32px] font-semibold",
                description:
                    "text-[18px] font-semibold",
                text:
                    "text-[20px]",
                paragraph:
                    "text-[20px] pb-[28px] last:pb-0",
                galleryTitle:
                    "text-[22px] font-semibold text-center",
                date:
                    "text-[12px] text-gray",
                pageDescription:
                    "text-[16px] text-left mb-[16px]",
                pageDate:
                    "text-[16px] mb-[16px]",
                cardTitle:
                    "text-[20px] font-semibold",
                newsCardLink:
                    "text-[16px]",
                cardDescription:
                    "text-[16px]",
                footerTitle:
                    "text-[24px]",
                footerText:
                    "text-[16px] text-gray-secondary",
                login: "text-[20px]",
                rulesText: "text-[16px]",
                regularText: "text-[18px] mb-[16px] leading-[1.25]",
                regularListWrapper: "flex flex-col",
                regularList: cn(
                    "relative text-[18px] mb-[16px] pl-[40px]",
                    "before:content-[''] before:absolute before:left-[10px] before:top-[50%] before:w-[4px] before:h-[4px] before:bg-black before:rounded-full"
                ),
                stepsText: "text-[16px]",
                stepsListWrapper: "flex flex-col gap-[8px] px-[12px] py-[16px] bg-light-pink rounded-[10px] before:-translate-y-1/2 before:-translate-x-1/2",
                stepsListItem: cn(
                    "text-[14px] uppercase pl-[33px] relative",
                    "before:content-[''] before:absolute before:left-[10px] before:top-[50%] before:w-[16px] before:h-[16px] before:bg-yellow before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2"
                ),
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export const AtomText = ({
    className,
    variant,
    asChild = false,
    ...props
}: React.ComponentProps<"p"> &
    VariantProps<typeof textVariants> & {
        asChild?: boolean
    }) => {
    const Comp = asChild ? Slot : "p"

    return (
        <Comp
            data-slot="text"
            className={cn(textVariants({ variant, className }))}
            {...props}
        />
    )
} 
