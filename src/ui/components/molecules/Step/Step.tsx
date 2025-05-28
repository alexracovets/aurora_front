"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@atoms";
import { cn } from "@utils";

import { StepType } from "@types";

export const Step = ({ title, photo, content, slug, isSecondary }: StepType) => {

    const maxLength = 500;

    return (
        <div className="w-full flex gap-x-[32px] p-[16px] border-[1px] border-black  border-b-0 last:border-b">
            <div className={cn(
                "w-[320px] min-w-[320px] h-[200px] relative",
                isSecondary && "order-3"
            )}>
                <Image src={photo.url} fill alt="image" priority />
            </div>
            <div
                className={cn(
                    "flex flex-col gap-y-[16px] w-full",
                    isSecondary && "order-1"
                )}
            >
                <h2 className="text-[32px]">{title}</h2>
                <div className="flex flex-col gap-y-[4px]">
                    {(() => {
                        let currentLength = 0;
                        return content.text.root.children.map((item, index) => {
                            if (currentLength >= maxLength) return null;

                            const remainingLength = maxLength - currentLength;
                            currentLength += item.children[0].text.length;

                            if (currentLength > maxLength) {
                                return <p key={index}>{item.children[0].text.slice(0, remainingLength)}...</p>;
                            }

                            return <p key={index}>{item.children[0].text}</p>;
                        });
                    })()}
                </div>
            </div>
            <div className={cn(
                "flex flex-col justify-end",
                isSecondary && "order-2"
            )}>
                <Button asChild>
                    <Link href={`/${slug}`}>
                        Далі
                    </Link>
                </Button>
            </div>
        </div>
    )
}