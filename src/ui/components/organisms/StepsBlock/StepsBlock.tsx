"use client";

import { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'
import { RichTextFilter } from "@molecules";
import { cn } from '@/utils';

interface LexicalNode extends SerializedLexicalNode {
    type: string;
    tag?: string;
    children?: Array<{ text: string }>;
}

type StepsType = {
    width?: ('1/1' | '1/2') | null;
    content?: {
        root: {
            type: string;
            children: {
                type: string;
                version: number;
                [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
        };
        [k: string]: unknown;
    } | null;
    contentLeft?: {
        root: {
            type: string;
            children: {
                type: string;
                version: number;
                [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
        };
        [k: string]: unknown;
    } | null;
    contentRight?: {
        root: {
            type: string;
            children: {
                type: string;
                version: number;
                [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
        };
        [k: string]: unknown;
    } | null;
    id?: string | null;
};

export const StepsBlock = ({ steps }: { steps: StepsType[] }) => {
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
                                    step.content && step.content.root.children.map((item: LexicalNode, idx: number) => {
                                        return <RichTextFilter item={item} key={idx} />
                                    })
                                }
                            </div>
                        )}

                        {step.width === "1/2" && (
                            <>
                                <div className="flex w-full flex-col gap-[1rem]">
                                    {
                                        step.contentLeft && step.contentLeft.root.children.map((item: LexicalNode, idx: number) => {
                                            return <RichTextFilter item={item} key={idx} />
                                        })
                                    }
                                </div>
                                <div className="flex w-full justify-center flex-col gap-[1rem]">
                                    {
                                        step.contentRight && step.contentRight.root.children.map((item: LexicalNode, idx: number) => {
                                            return <RichTextFilter item={item} key={idx} />
                                        })
                                    }
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
