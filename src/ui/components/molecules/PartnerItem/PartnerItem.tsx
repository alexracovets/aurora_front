"use client";

import { Partner } from "@/payload-types";
import Image from "next/image";

import { AtomText } from "@atoms";

export const PartnerItem = ({ name, upload }: Partner) => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            {
                name && (
                    <AtomText variant="cardTitle" className="bg-white rounded-t-[8px] py-[4px] px-[12px]">
                        {name}
                    </AtomText>
                )
            }
            <div className="bg-white rounded-[8px] p-[8px] w-full">
                {upload && typeof upload !== 'number' && (
                    <div className="w-full h-[15rem] relative rounded-[8px] overflow-hidden">
                        <Image src={upload.url || ''} alt={upload.alt || ''} fill className="object-cover" />
                    </div>
                )}
            </div>

        </div>
    )
}