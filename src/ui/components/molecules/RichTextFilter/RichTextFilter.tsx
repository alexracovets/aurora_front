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
                            {item?.children?.map((child: { text: string, format?: number }, idx: number) => {
                                return (
                                    <span key={idx} className={cn(
                                        child.format === 1 && 'font-semibold',
                                        child.format === 2 && 'italic',
                                        child.format === 4 && 'underline',
                                        child.format === 8 && 'line-through'
                                    )}>{child.text}</span>
                                )
                            })}
                        </h2>
                    </AtomText>
                )
            }
            if (item.tag === "h3") {
                return (
                    <AtomText variant="description" asChild className="leading-[1.1]">
                        <h3>
                            {item?.children?.map((child: { text: string, format?: number }, idx: number) => {
                                return (
                                    <span key={idx} className={cn(
                                        child.format === 1 && 'font-semibold',
                                        child.format === 2 && 'italic',
                                        child.format === 4 && 'underline',
                                        child.format === 8 && 'line-through'
                                    )}>{child.text}</span>
                                )
                            })}
                        </h3>
                    </AtomText>
                )
            }
        case "paragraph":
            return (
                <AtomText className="leading-[1.1]">
                    {item?.children?.map((child: { text: string, format?: number }, idx: number) => {
                        return (
                            <span key={idx} className={cn(
                                child.format === 1 && 'font-semibold',
                                child.format === 2 && 'italic',
                                child.format === 4 && 'underline',
                                child.format === 8 && 'line-through'
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
                <div className='flex h-full w-full justify-center items-center'>
                    <div className="relative w-full h-[50%] rounded-[1rem] overflow-hidden">
                        <Image src={item.value?.url || ''} alt={item.value?.alt || 'photo =( '} fill className="object-cover" />
                    </div>
                </div>
            )
        case "list":
            return (
                <ul className="gap-[1rem] py-[1.6rem] px-[1.2rem] bg-light-pink rounded-[1rem]">
                    {item?.children?.map((child: { text: string, children?: Array<{ text: string, format?: number }> }, idx: number) => {
                        return (
                            <AtomText variant="missionList" asChild key={idx}>
                                <li>
                                    {
                                        child.children?.map((child: { text: string, format?: number }, id: number) => {
                                            return (
                                                <span key={id} className={cn(
                                                    child.format === 1 && 'font-semibold',
                                                    child.format === 2 && 'italic',
                                                    child.format === 4 && 'underline',
                                                    child.format === 8 && 'line-through'
                                                )}>{child.text}</span>
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