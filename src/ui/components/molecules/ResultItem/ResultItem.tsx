"use client";

import Image from "next/image";
import { AtomButton, AtomHR, AtomText } from "@atoms";
import { MoveRight } from "lucide-react";

interface ResultItemProps {
    title: string;
    shortDescription: string;
    description: string;
    image: {
        url: string;
        alt: string;
    };
}

export const ResultItem = ({ title, shortDescription, image, description }: ResultItemProps) => {
    return (
        <div
            className="flex justify-between items-center w-full gap-x-[35px] bg-white rounded-[30px] p-[28px]"
        >
            <div
                className="w-[251px] min-w-[251px] h-[164px] relative rounded-[20px] overflow-hidden"
            >
                <Image src={image.url} alt={image.alt} fill className="object-cover" />
            </div>
            <div
                className="flex flex-col w-full"
            >
                <AtomText variant="h3" className="mb-[10px]" asChild>
                    <h3>{title}</h3>
                </AtomText>
                <AtomText variant="text" className="mb-[24px]" asChild>
                    <p>{shortDescription}</p>
                </AtomText>
                <AtomHR />
                <AtomButton variant="destructive">
                    Читати далі
                    <MoveRight className="w-[24px] text-yellow" />
                </AtomButton>
            </div>
        </div>
    )
}