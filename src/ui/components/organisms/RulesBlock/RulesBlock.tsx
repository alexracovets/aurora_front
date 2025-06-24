"use client";

import { AtomText } from "@atoms";

interface RulesBlockProps {
    content: {
        type: string;
        children: {
            text: string;
        }[];
    }[];
}

export const RulesBlock = ({ content }: RulesBlockProps) => {
    return (
        <div className="flex flex-col mb-[80px]">
            {
                content.map((item, idx) => {
                    if (item.type === 'paragraph') {
                        return (
                            <AtomText variant="paragraph" key={idx}>
                                {item?.children?.[0]?.text}
                            </AtomText>
                        )
                    }
                })
            }
        </div>
    );
};