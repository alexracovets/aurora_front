"use client"

import Image from "next/image";
import Link from "next/link";
import { NewsData } from "@data";
import { AtomHR, AtomText } from "@atoms";
import { MoveRight } from "lucide-react";
import { PagitationComponent } from "@molecules";
import { useState } from "react";

const RESULTS_PER_PAGE = 6;

export const NewsBlock = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = RESULTS_PER_PAGE;

    const totalResults = NewsData.length;
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const startIndex = (currentPage - 1) * resultsPerPage;
    const currentResults = NewsData.slice(startIndex, startIndex + resultsPerPage);

    return (
        <div className="flex flex-col w-full">
            <div className="grid grid-cols-3 gap-[20px] w-full mb-[80px]">
                {currentResults.map((item, idx) => (
                    <Link
                        key={idx}
                        href={`/news/${item.slug}`}
                        className="w-full flex flex-col gap-[10px] bg-white rounded-[30px] py-[24px] px-[36px] hover:scale-[1.05] transition transition-[300ms] ease-in"
                    >
                        <div className="w-full h-[273px] relative rounded-[20px] overflow-hidden">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                        </div>
                        <AtomText variant="text" asChild>
                            <h3>{item.data}</h3>
                        </AtomText>
                        <AtomText variant="h3" asChild>
                            <h3>{item.title}</h3>
                        </AtomText>
                        <AtomHR />
                        <div className="w-full flex justify-between items-center">
                            <AtomText variant="text">Далі</AtomText>
                            <MoveRight className="w-[24px] text-yellow" />
                        </div>
                    </Link>
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