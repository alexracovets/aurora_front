"use client";

import Image from "next/image";

import { AtomHR, AtomText } from "@atoms";
import { Partner } from "@/payload-types";

export const PartnerItem = (data: Partner) => {
    return (
        <>
            {
                data && (
                    <div
                        className="bg-white rounded-[30px] py-[28px] px-[25px] gap-x-[28px] flex justify-center items-center w-full"
                    >
                        {
                            data.upload &&
                            typeof data.upload !== 'number' &&
                            data.upload.url &&
                            data.upload.alt && (
                                <div
                                    className="w-[303px] min-w-[303px] h-[164px] relative rounded-[20px] overflow-hidden"
                                >
                                    <Image src={data.upload.url} alt={data.upload.alt} fill className="object-cover" />
                                </div>
                            )
                        }
                        <div
                            className="w-full flex flex-col gap-y-[56px]"
                        >
                            <AtomText variant={"cardTitle"}>
                                {data.name}
                            </AtomText>
                            <AtomHR className="w-full" />
                        </div>
                    </div>
                )
            }
        </>
    )
}