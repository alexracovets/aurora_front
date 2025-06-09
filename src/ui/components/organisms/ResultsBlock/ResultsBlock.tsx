"use client";

import { PagitationComponent, ResultItem } from "@molecules";
import { useState, useEffect } from "react";
import { Result } from "@payload-types";

const RESULTS_PER_PAGE = 4;

export const ResultsBlock = () => {
    const [results, setResults] = useState<Result[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const resultsPerPage = RESULTS_PER_PAGE;

    useEffect(() => {
        const fetchResults = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/results');
                const data = await response.json();
                setResults(data.docs);
            } catch (error) {
                console.error('Error fetching results:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchResults();
    }, []);

    const totalResults = results.length;
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const startIndex = (currentPage - 1) * resultsPerPage;
    const currentResults = results.slice(startIndex, startIndex + resultsPerPage);

    if (isLoading) {
        return <div>Завантаження...</div>;
    }

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