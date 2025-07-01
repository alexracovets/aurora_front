"use client";

import { AtomText, AtomHR, ArrowTo, AtomLink, AtomButton, AtomImage } from "@atoms";
import { cn, formatDate } from "@utils";

interface NewsItemProps {
    images: {
        banner: string[];
    };
    title: string;
    date?: string;
    slug: string;
}

export const NewsItem = ({ images, title, date, slug }: NewsItemProps) => {
    return (
        <div className={cn(
            "w-full flex flex-col bg-white rounded-[8px] p-[8px]",
            "outline outline-1 outline-transparent transition transition-[300ms] ease-in",
            "hover:outline-yellow"
        )}>
            <AtomImage src={images.banner[0]} alt={title} variant="newsItem" />
            <div className="flex w-full flex-col p-[8px] pb-[48px] relative flex-1">
                {date && <AtomText variant="date" asChild><h3>{formatDate(date)}</h3></AtomText>}
                <AtomText variant="cardTitle" asChild><h3>{title}</h3></AtomText>
                <AtomLink href={`/news/${slug}`} variant="cardLink" className="px-[8px] mt-auto">
                    <AtomHR />
                    <AtomButton variant="cardLink">
                        <AtomText variant="newsCardLink">Читати далі</AtomText>
                        <ArrowTo />
                    </AtomButton>
                </AtomLink>
            </div>
        </div>
    )
}