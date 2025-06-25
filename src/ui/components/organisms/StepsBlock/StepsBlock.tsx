"use client";

import { RichTextFilter } from "@molecules";
import { Page } from '@/payload-types';
import { cn } from '@/utils';

export const StepsBlock = ({ steps }: { steps: Page['steps'] }) => {
    if (!steps) return null;
    return (
        <div className="w-full grow grid grid-cols-2 gap-[1.6rem] overflow-hidden">
            {steps.map((step, idx) => {
                return (
                    <div
                        key={idx}
                        className={cn(
                            "grid grid-cols-1 bg-white p-[1.6rem] rounded-[1rem] gap-x-[1.6rem]",
                            step.width === "1/2" && "grid-cols-2"
                        )}
                    >
                        {step.width === "1/1" && (
                            <div className="flex w-full flex-col gap-[1rem]">
                                {
                                    step.content && step.content.root.children.map((item, idx) => {
                                        return <RichTextFilter item={item} key={idx} steps />
                                    })
                                }
                            </div>
                        )}

                        {step.width === "1/2" && (
                            <>
                                <div className="flex w-full flex-col gap-[1rem]">
                                    {
                                        step.contentLeft && step.contentLeft.root.children.map((item, idx) => {
                                            return <RichTextFilter item={item} key={idx} steps />
                                        })
                                    }
                                </div>
                                <div className="flex w-full justify-center flex-col gap-[1rem]">
                                    {
                                        step.contentRight && step.contentRight.root.children.map((item, idx) => {
                                            return <RichTextFilter item={item} key={idx} steps />
                                        })
                                    }
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    );
};