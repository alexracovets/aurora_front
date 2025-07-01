import { RichTextItemType } from '@/types';
import { cn } from '@utils';
import { AtomText, AtomHR, AtomImage } from '@atoms';

interface RichTextFilterProps {
    item: RichTextItemType;
    steps?: boolean;
}

export const RichTextFilter = ({ item, steps }: RichTextFilterProps) => {
    if (!item) return null;
    switch (item.type) {
        case "heading":
            if (item.tag === "h2") {
                return (
                    <AtomText variant="stepsTitle" asChild>
                        <h2>
                            {item?.children?.map((child, idx) => {
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
                    <AtomText variant="stepsDescription" asChild>
                        <h3>
                            {item?.children?.map((child, idx) => {
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
                <AtomText variant={steps ? "stepsText" : "regularText"}>
                    {item?.children?.map((child, idx) => {
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
                <AtomImage src={item.value?.url || ''} alt={item.value?.alt || 'photo =( '} variant="richText" />
            )
        case "list":
            return (
                <AtomText variant={steps ? "stepsListWrapper" : "regularListWrapper"} asChild>
                    <ul>
                        {item?.children?.map((child: { text: string, children?: Array<{ text: string, format?: number }> }, idx: number) => {
                            return (
                                <AtomText variant={steps ? "stepsListItem" : "regularList"} asChild key={idx}>
                                    <li>
                                        {child.children?.map((child, id) => {
                                            return (
                                                <span key={id} className={cn(
                                                    child.format === 1 && 'font-semibold',
                                                    child.format === 2 && 'italic',
                                                    child.format === 4 && 'underline',
                                                    child.format === 8 && 'line-through'
                                                )}>{child.text}</span>
                                            )
                                        })}
                                    </li>
                                </AtomText>
                            )
                        })}
                    </ul>
                </AtomText>
            )
        default:
            return null;
    }
}