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
                    "text-[60px] font-semibold text-left pt-[60px] my-[16px] leading-[0.93]",
                headerH3:
                    "text-[32px] font-semibold",
                description:
                    "text-[18px] font-semibold",
                text:
                    "text-[20px]",
                paragraph:
                    "text-[20px] pb-[28px] last:pb-0",
                date:
                    "text-[12px] text-gray mb-[8px]",
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
                    "text-[16px]",
                footerText:
                    "text-[12px] text-gray-secondary",
                login: "text-[16px]",
                rulesText: "text-[16px]",
                regularText: "text-[18px] mb-[16px] leading-[1.25]",
                regularListWrapper: "flex flex-col",
                regularList: cn(
                    "relative text-[18px] mb-[16px] pl-[40px]",
                    "before:content-[''] before:absolute before:left-[10px] before:top-[50%] before:w-[4px] before:h-[4px] before:bg-black before:rounded-full"
                ),
                stepsTitle: "text-[32px] font-semibold",
                stepsDescription: "text-[18px] font-semibold leading-[1]",
                stepsText: "text-[16px] leading-[1]",
                stepsListWrapper: "flex flex-col gap-[8px] px-[12px] py-[16px] bg-light-pink rounded-[10px] before:-translate-y-1/2 before:-translate-x-1/2",
                stepsListItem: cn(
                    "text-[14px] uppercase pl-[33px] leading-[1] relative",
                    "before:content-[''] before:absolute before:left-[10px] before:top-[50%] before:w-[16px] before:h-[16px] before:bg-yellow before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2"
                ),
                galleryDescription: "text-[24px] font-semibold text-center mb-[24px]",
                galleryShowCaseTitle: "text-[20px] font-semibold text-center py-[12px]",
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
