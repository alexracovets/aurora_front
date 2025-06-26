"use client";

import * as React from "react";
import { IMaskInput } from "react-imask";
import { cn } from "@utils"

interface PhoneInputProps extends Omit<React.ComponentProps<"input">, 'ref' | 'mask'> {
    mask?: string;
    maskChar?: string;
}

function PhoneInput({ 
    className, 
    mask = "+380 (00) 000 00 00",
    maskChar = "_",
    ...props 
}: PhoneInputProps) {
    return (
        <IMaskInput
            {...(props as any)}
            mask={mask as any}
            unmask={false}
            lazy={false}
            placeholderChar={maskChar}
            data-slot="input"
            className={cn(
                "text-[20px] bg-white rounded-[8px] border border-transparent px-[45px] py-[16px] outline-none",
                "focus:border-yellow focus:ring-yellow focus:ring-[3px]",
                className
            )}
        />
    )
}

export { PhoneInput } 