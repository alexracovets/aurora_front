"use client";

import { SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical';
import { RichTextFilter } from "@molecules";
import { AtomText } from "@atoms";

interface LexicalNode extends SerializedLexicalNode {
    type: string;
    tag?: string;
    children?: Array<{
        text: string,
        format?: number,
    }>;
    value?: {
        url?: string;
        alt?: string;
    };
}

interface RulesContentBlock {
    contentType?: 'paragraph' | 'space';
    paragraph?: any; // richText content
    space?: string;
    blockType: 'rulesContent';
}

interface RulesBlockProps {
    content?: LexicalNode[];
    rules?: RulesContentBlock[];
}

export const RulesBlock = ({ content, rules }: RulesBlockProps) => {
    // Якщо передано richText контент
    if (content) {
        return (
            <div className="flex flex-col mb-[80px] gap-[1rem]">
                {
                    content.map((item, idx) => {
                        return <RichTextFilter item={item} key={idx} />
                    })
                }
            </div>
        );
    }

    // Якщо передано блоки RulesContent
    if (rules) {
        return (
            <div className="flex flex-col mb-[80px] gap-[1rem]">
                {
                    rules.map((rule, idx) => {
                        if (rule.contentType === 'paragraph' && rule.paragraph) {
                            return (
                                <div key={idx}>
                                    {rule.paragraph.root.children.map((item: LexicalNode, itemIdx: number) => {
                                        return <RichTextFilter item={item} key={itemIdx} />
                                    })}
                                </div>
                            );
                        }
                        if (rule.contentType === 'space') {
                            return <div key={idx} className="h-[2rem]" />;
                        }
                        return null;
                    })
                }
            </div>
        );
    }

    return null;
};