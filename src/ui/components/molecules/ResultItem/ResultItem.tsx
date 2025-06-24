"use client";

import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

import { AtomButton, AtomHR, AtomText } from "@atoms";
import { Result } from "@/payload-types";

export const ResultItem = ({ title, image, slug, description }: Result) => {
    return (
        <div
            className="flex justify-between items-center w-full gap-x-[35px] bg-white rounded-[30px] p-[28px]"
        >
            <div
                className="w-[251px] min-w-[251px] h-[164px] relative rounded-[20px] overflow-hidden"
            >
                {image && typeof image === 'object' && 'url' in image && image.url && (
                    <Image src={image.url} alt={image.alt || 'alt'} fill className="object-cover" />
                )}
            </div>
            <div
                className="flex flex-col w-full items-end"
            >
                <AtomText variant="h3" className="mb-[10px] w-full" asChild>
                    <h3>{title}</h3>
                </AtomText>
                <AtomText variant="text" className="mb-[24px]" asChild>
                    <p>{description}</p>
                </AtomText>
                <AtomHR />
                <AtomButton variant="destructive" asChild>
                    <Link href={`/results/${slug}`}>
                        Читати далі
                        <GoArrowRight className="w-[24px] text-yellow" />
                    </Link>
                </AtomButton>
            </div>
        </div>
    )
}