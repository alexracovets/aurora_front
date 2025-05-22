"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@atoms";
import { cn } from "@utils";

type StepProps = {
    title: string;
    image: string;
    description: string[];
    link: string;
    isSecondary?: boolean;
}

export const Step = ({ title, image, description, link, isSecondary }: StepProps) => {

    const maxLength = 500;

    return (
        <div className="w-full flex gap-x-[32px] p-[16px] border-[1px] border-black  border-b-0 last:border-b">
            <div className={cn(
                "w-[320px] min-w-[320px] h-[200px] relative",
                isSecondary && "order-3"
            )}>
                <Image src={image} fill alt="image" priority />
            </div>
            <div
                className={cn(
                    "flex flex-col gap-y-[16px]",
                    isSecondary && "order-1"
                )}
            >
                <h2 className="text-[32px]">{title}</h2>
                <div className="flex flex-col gap-y-[4px]">
                    {(() => {
                        let currentLength = 0;
                        return description.map((item, index) => {
                            if (currentLength >= maxLength) return null;

                            const remainingLength = maxLength - currentLength;
                            currentLength += item.length;

                            if (currentLength > maxLength) {
                                return <p key={index}>{item.slice(0, remainingLength)}...</p>;
                            }

                            return <p key={index}>{item}</p>;
                        });
                    })()}
                </div>
            </div>
            <div className={cn(
                "flex flex-col justify-end",
                isSecondary && "order-2"
            )}>
                <Button asChild>
                    <Link href={link}>
                        Далі
                    </Link>
                </Button>
            </div>
        </div>
    )
}