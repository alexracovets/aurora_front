"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@utils"

export const buttonVariants = cva(
    "block rounded-md border border-black px-[16px] py-[8px] cursor-pointer",
    {
        variants: {
            variant: {
                default:
                    "bg-gray-200 text-black shadow-xs hover:bg-gray-500/90",
                destructive: "bg-transparent text-black text-[20px] border border-none flex justify-center items-center gap-x-[15px] w-max",
                destructive_secondary: "bg-transparent text-black text-[20px] flex justify-center items-center gap-x-[15px] pl-0 w-max pb-[10px] rounded-none border-x-0 border-t-0 border-b border-gray",
                toBack: "bg-transparent text-black text-[24px] border border-none flex justify-start items-center gap-x-[20px] w-max",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export const AtomButton = ({
    className,
    variant,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) => {
    const Comp = asChild ? Slot : "button"

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, className }))}
            {...props}
        />
    )
} 
