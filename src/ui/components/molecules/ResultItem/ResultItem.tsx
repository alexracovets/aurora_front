"use client";

import Image from "next/image";

import { AtomButton, AtomHR, AtomText, ArrowTo, AtomLink } from "@atoms";
import { Result } from "@/payload-types";

export const ResultItem = ({ title, image, slug, description }: Result) => {
    return (
        <div
            className="grid grid-cols-[26rem_1fr] gap-x-[24px] bg-white rounded-[8px] p-[8px]"
        >
            <div className="w-full h-[15rem] relative rounded-[8px] overflow-hidden">
                {image && typeof image === 'object' && 'url' in image && image.url && (
                    <Image src={image.url} alt={image.alt || 'alt'} fill className="object-cover" />
                )}
            </div>
            <div className="flex w-full flex-col py-[8px] gap-y-[8px] pb-[48px] relative">
                <AtomText variant="newsCardTitle" asChild>
                    <h3>{title}</h3>
                </AtomText>
                <AtomText variant="cardDescription" asChild>
                    <p>{description}</p>
                </AtomText>
                <AtomLink href={`/results/${slug}`} variant="cardLink">
                    <AtomHR />
                    <AtomButton variant="cardLink">
                        <AtomText variant="newsCardLink">Читати далі</AtomText>
                        <ArrowTo />
                    </AtomButton>
                </AtomLink>
            </div>
        </div>
    )
}