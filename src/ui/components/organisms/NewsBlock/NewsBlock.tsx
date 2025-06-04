"use client"

import Image from "next/image";
import Link from "next/link";
import { NewsData } from "@data";
import { AtomHR, AtomText } from "@atoms";
import { MoveRight } from "lucide-react";

export const NewsBlock = () => {
    return (
        <div className="grid grid-cols-3 gap-[20px] w-full">
            {NewsData.map((item, idx) => (
                <Link
                    key={idx}
                    href={`/news/${item.slug}`}
                    className="w-full flex flex-col gap-[10px] bg-white rounded-[30px] py-[24px] px-[36px]"
                >
                    <div className="w-full h-[273px] relative rounded-[20px] overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <AtomText variant="cardData" asChild>
                        <h3>{item.data}</h3>
                    </AtomText>
                    <AtomText variant="h3" asChild>
                        <h3>{item.title}</h3>
                    </AtomText>
                    <AtomHR />
                    <div className="w-full flex justify-between items-center">
                        <AtomText variant="cardNext">Далі</AtomText>
                        <MoveRight className="w-[24px] text-yellow" />
                    </div>
                </Link>
            ))}
        </div>
    );
};