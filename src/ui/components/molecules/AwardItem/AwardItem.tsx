"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AtomButton, AtomHR, AtomText } from "@atoms";
import { Award } from "@/payload-types";

export const AwardItem = ({ title, image, date, slug }: Award) => {
    return (
        <div
            className="flex flex-col w-full gap-y-[10px] bg-white rounded-[30px] py-[25px] px-[35px]"
        >
            <div
                className="w-[499px] min-w-[499px] h-[273px] relative rounded-[20px] overflow-hidden"
            >
                {image && typeof image === 'object' && 'url' in image && image.url && (
                    <Image src={image.url} alt={image.alt || 'alt'} fill className="object-cover" />
                )}
            </div>
            {date &&
                <AtomText variant="text">
                    {new Date(date).toLocaleDateString('uk-UA')}
                </AtomText>
            }
            <AtomText variant="h3" asChild>
                <h3>{title}</h3>
            </AtomText>
            <AtomHR />
            <AtomButton
                variant="destructive"
                asChild
                className="flex justify-between items-center w-full px-0"
            >
                <Link href={`/awards/${slug}`}>
                    Читати далі
                    <MoveRight className="w-[24px] text-yellow" />
                </Link>
            </AtomButton>
        </div>
    )
};