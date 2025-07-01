"use client";

import { Page } from "@/payload-types";
import { RichTextFilter } from "@molecules";
import { cn } from "@utils";

interface StepsColumnProps {
    content: NonNullable<NonNullable<Page['steps']>[0]['content']>['root']['children'];
    center?: boolean;
}

export const StepsColumn = ({ content, center }: StepsColumnProps) => {
    return (
        <div className={cn(
            "flex w-full flex-col gap-[1rem]",
            center && "justify-center"
        )}>
            {
                content.map((item, idx) => {
                    return <RichTextFilter item={item} key={idx} steps />
                })
            }
        </div>
    )
}