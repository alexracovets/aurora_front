"use client"

import Image from "next/image";
import Link from "next/link";
import { NewsData } from "@data";
import { AtomHR, AtomText } from "@atoms";
import { MoveRight } from "lucide-react";
import { PagitationComponent } from "@molecules";
import { useState } from "react";
import { cn } from "@utils";
import { LuArrowRight } from "react-icons/lu";

const RESULTS_PER_PAGE = 6;

export const NewsBlock = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = RESULTS_PER_PAGE;

    const totalResults = NewsData.length;
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const startIndex = (currentPage - 1) * resultsPerPage;
    const currentResults = NewsData.slice(startIndex, startIndex + resultsPerPage);

    return (
        <div className="flex flex-col w-full gap-y-[16px]">
            <div className="grid grid-cols-3 gap-[16px] w-full">
                {currentResults.map((item, idx) => (
                    <div key={idx}
                        className={cn(
                            "w-full flex flex-col gap-[8px] bg-white rounded-[8px] p-[8px]",
                            "outline outline-1 outline-transparent transition transition-[300ms] ease-in",
                            "hover:outline-yellow"
                        )}
                    >
                        <div className="w-full h-[15rem] relative rounded-[8px] overflow-hidden">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="flex w-full flex-col p-[8px] pb-[48px] relative">
                            <AtomText variant="date" asChild>
                                <h3>{item.data}</h3>
                            </AtomText>
                            <AtomText variant="newsCardTitle" asChild>
                                <h3>{item.title}</h3>
                            </AtomText>
                            <Link
                                href={`/news/${item.slug}`}
                                className={cn(
                                    "absolute bottom-0 left-0 w-full h-[48px] bg-white rounded-[8px] p-[8px] flex flex-col gap-[8px]",
                                    "transition transition-[300ms] ease-in",
                                    "hover:text-[#d5b904]"
                                )}
                            >
                                <AtomHR />
                                <div className="w-full flex justify-between items-center">
                                    <AtomText variant="newsCardLink">Читати далі</AtomText>
                                    <LuArrowRight size={"2.4rem"} color="#d5b904" />
                                </div>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
            <PagitationComponent
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>

    );
};