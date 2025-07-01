"use client";

import Image from "next/image";

import { AtomText, AtomHR, ArrowTo, AtomLink, AtomButton } from "@atoms";
import { cn, formatDate } from "@utils";
import { Award } from "@/payload-types";


export const AwardItem = ({ title, image, date, slug }: Award) => {
    return (
        <div className={cn(
            "w-full flex flex-col gap-[8px] bg-white rounded-[8px] p-[8px]",
            "outline outline-1 outline-transparent transition transition-[300ms] ease-in",
            "hover:outline-yellow"
        )}>
            {
                typeof image !== 'number' && image && (
                    <div className="w-full h-[15rem] relative rounded-[8px] overflow-hidden">
                        <Image src={image.url || ''} alt={image.alt || ''} fill className="object-cover" />
                    </div>
                )
            }
            <div className="flex w-full flex-col p-[8px] pb-[48px] relative">
                {
                    date && (
                        <AtomText variant="date" asChild>
                            <p>{formatDate(date)}</p>
                        </AtomText>
                    )
                }
                <AtomText variant="cardTitle" asChild>
                    <h3>{title}</h3>
                </AtomText>
                <AtomLink href={`/awards/${slug}`} variant="cardLink" className="px-[8px]">
                    <AtomHR />
                    <AtomButton variant="cardLink">
                        <AtomText variant="newsCardLink">Читати далі</AtomText>
                        <ArrowTo />
                    </AtomButton>
                </AtomLink>
            </div>
        </div>
    )
};