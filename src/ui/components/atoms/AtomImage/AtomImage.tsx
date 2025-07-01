"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";

import { cn } from "@utils";

interface AtomImageProps {
    src: string | null;
    alt: string | null;
    className?: string;
    classNameImage?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    sizes?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    variant?: VariantProps<typeof linksVariants>["variant"];
}

const linksVariants = cva(
    "block",
    {
        variants: {
            variant: {
                default: "",
                logo: "w-[116px] h-[40px] m-[16px]",
                fullscreen: "cursor-pointer transition-transform hover:scale-[1.02] w-full h-full ease-in-out duration-300",
                itemPage: "w-[62.7rem] h-[32.9rem] rounded-[8px] float-left mr-[38px] mb-[12px]",
                newsItem: "w-full h-[210px] rounded-[8px] mb-[8px]",
                partnerItem: "w-full h-[150px] rounded-[8px]",
                resultItem: "w-full h-[150px] rounded-[8px]",
                richText: "w-full h-[180px] rounded-[8px]",
                showCaseGallery: "w-full h-[150px] rounded-[8px]"
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export const AtomImage = ({ className, classNameImage, variant, src, alt, onClick, width, height, priority = true, sizes = "100%", ...props }: AtomImageProps) => {
    return (
        <div className={cn("relative overflow-hidden", linksVariants({ variant, className }))} onClick={onClick}>
            <Image
                className={cn("object-cover", classNameImage)}
                src={src ? src : ""}
                alt={alt ? alt : "image"}
                width={width}
                height={height}
                priority={priority}
                sizes={sizes}
                fill={width && height ? false : true}
                {...props}
            />
        </div>

    )
}