"use client";

import { Partner } from "@/payload-types";

import { AtomText, AtomImage } from "@atoms";

export const PartnerItem = ({ name, upload }: Partner) => {
    return (
        <div className="flex flex-col justify-center items-center">
            {
                upload &&
                typeof upload !== 'number' &&
                <AtomImage
                    src={upload.url || ''}
                    alt={name || ''}
                    className="w-full h-[220px] rounded-t-[8px] overflow-hidden"
                />
            }
            <AtomText variant="cardTitle" className={"bg-white rounded-b-[8px] p-[8px] w-full text-center"}>
                {name}
            </AtomText>
        </div>
    )
}