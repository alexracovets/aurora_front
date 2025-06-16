import { cn } from '@/utils';
import { AtomText, AtomHR } from '@atoms';
import { SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical';
import Image from 'next/image';

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

export const RichTextFilter = ({ item }: { item: LexicalNode }) => {
    switch (item.type) {
        case "heading":
            if (item.tag === "h2") {
                return (
                    <AtomText variant="h3" asChild>
                        <h2>
                            {item?.children?.map((child: { text: string }, idx: number) => {
                                return (
                                    <span key={idx}>{child.text}</span>
                                )
                            })}
                        </h2>
                    </AtomText>
                )
            }
            if (item.tag === "h3") {
                return (
                    <AtomText variant="description" asChild>
                        <h3>
                            {item?.children?.map((child: { text: string }, idx: number) => {
                                return (
                                    <span key={idx}>{child.text}</span>
                                )
                            })}
                        </h3>
                    </AtomText>
                )
            }
        case "paragraph":
            return (
                <AtomText>
                    {item?.children?.map((child: { text: string, format?: number }, idx: number) => {
                        return (
                            <span key={idx} className={cn(
                                child.format === 1 && 'font-semibold'
                            )}>{child.text}</span>
                        )
                    })}
                </AtomText>
            )
        case "horizontalrule":
            return (
                <AtomHR className="max-w-[70%]" />
            )
        case "upload":
            return (
                <div className="w-full h-[203px] rounded-[20px] overflow-hidden relative">
                    <Image src={item.value?.url || ''} alt={item.value?.alt || 'photo =( '} fill className="object-cover" />
                </div>
            )
        case "list":
            return (
                <ul className="gap-[10px] py-[30px] px-[18px] bg-light-pink rounded-[20px] max-w-[90%]">
                    {item?.children?.map((child: { text: string, children?: Array<{ text: string, format?: number }> }, idx: number) => {
                        return (
                            <AtomText variant="missionList" asChild key={idx}>
                                <li>
                                    {
                                        child.children?.map((child: { text: string, format?: number }, id: number) => {
                                            return (
                                                <span key={id} className={cn(child.format === 1 && 'font-semibold')}>{child.text}</span>
                                            )
                                        })
                                    }
                                </li>
                            </AtomText>
                        )
                    })}
                </ul>
            )
        default:
            return null;
    }
}