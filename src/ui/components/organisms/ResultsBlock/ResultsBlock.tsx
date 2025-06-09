"use client";

import { PagitationComponent, ResultItem } from "@molecules";
import { useState } from "react";
import { ResultData } from "@data";

const RESULTS_PER_PAGE = 4;

export const ResultsBlock = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = RESULTS_PER_PAGE;

    const totalResults = ResultData.length;
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const startIndex = (currentPage - 1) * resultsPerPage;
    const currentResults = ResultData.slice(startIndex, startIndex + resultsPerPage);

    return (
        <div>
            <div className="flex flex-col gap-[20px] w-full mb-[80px]">
                {currentResults.map((result, index) => (
                    <ResultItem key={index} {...result} />
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