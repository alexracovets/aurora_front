"use client";

import { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'
import { RichTextFilter } from "@/ui/components/molecules/RichTextFilter/RichTextFilter";
interface LexicalNode extends SerializedLexicalNode {
    type: string;
    tag?: string;
    children?: Array<{ text: string }>;
}

interface StepsBlockProps {
    steps: Array<{
        content: SerializedEditorState | null;
        contentLeft: SerializedEditorState | null;
        contentRight: SerializedEditorState | null;
        width: string;
    }>
}

export const StepsBlock = ({ steps }: StepsBlockProps) => {
    return (
        <div className="flex w-full flex-wrap gap-[20px]">
            {steps.map((step, idx) => {
                return (
                    <div
                        key={idx}
                        className="flex items-center w-[calc(50%-10px)] bg-white py-[36px] px-[44px] rounded-[30px] gap-x-[8px]"
                    >
                        {step.width === "1/1" && (
                            <div className="flex w-full flex-col gap-[20px]">
                                {
                                    step.content && step.content.root.children.map((item: LexicalNode, idx: number) => {
                                        return <RichTextFilter item={item} key={idx} />
                                    })
                                }
                            </div>
                        )}

                        {step.width === "1/2" && (
                            <>
                                <div className="flex w-full max-w-[calc(50%-4px)] flex-col gap-[20px]">
                                    {
                                        step.contentLeft && step.contentLeft.root.children.map((item: LexicalNode, idx: number) => {
                                            return <RichTextFilter item={item} key={idx} />
                                        })
                                    }
                                </div>
                                <div className="flex w-full max-w-[calc(50%-4px)] flex-col gap-[20px]">
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
