"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@utils"

const textVariants = cva(
    "",
    {
        variants: {
            variant: {
                default:
                    "text-[16px]",
                h1:
                    "text-[40px] font-semibold text-center my-[30px]",
                h1_secondary:
                    "text-[40px] font-semibold text-left mt-[15px] mb-[35px]",
                h3:
                    "text-[32px] font-semibold",
                description:
                    "text-[18px] font-semibold",
                missionList:
                    "text-[14px] uppercase px-[25px] pl-[33px] relative before:content-[''] before:absolute before:left-[10px] before:top-[50%] before:w-[16px] before:h-[16px] before:bg-yellow before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2",
                text:
                    "text-[20px]",
                paragraph:
                    "text-[20px] pb-[28px] last:pb-0",
                galleryTitle:
                    "text-[22px] font-semibold text-center",
                date:
                    "text-[12px] text-gray",
                headerH1:
                    "text-[60px] font-semibold leading-[56px] text-left pt-[60px] pb-[16px] mb-[16px]",
                pageDescription:
                    "text-[16px] text-left mb-[16px]",
                pageDate:
                    "text-[16px]",
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
                login: "text-[20px]"
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
