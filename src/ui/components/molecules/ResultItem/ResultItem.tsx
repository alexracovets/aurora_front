"use client";

import { AtomButton, AtomHR, AtomText, ArrowTo, AtomLink, AtomImage } from "@atoms";
import { Result } from "@/payload-types";

export const ResultItem = ({ title, image, slug, description }: Result) => {
    return (
        <div className="grid grid-cols-[26rem_1fr] gap-x-[24px] bg-white rounded-[8px] p-[8px]">
            {
                image && typeof image === 'object' &&
                <AtomImage src={image.url || ''} alt={image.alt || 'alt'} variant="resultItem" />
            }
            <div className="flex w-full flex-col py-[8px] gap-y-[8px] pb-[48px] relative">
                <AtomText variant="cardTitle" asChild>
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