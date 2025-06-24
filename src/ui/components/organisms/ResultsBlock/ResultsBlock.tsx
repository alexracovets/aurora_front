"use client";

import { Suspense, useEffect, useState } from "react";

import { PaginationBlock } from "@organisms";
import { ResultItem } from "@molecules";
import { ResultsWrapper } from "@atoms";
import { Partner } from "@/payload-types";

export const ResultsBlock = () => {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState(true);
    const RESULTS_PER_PAGE = 6;

    const getData = async () => {
        try {
            const response = await fetch(`/api/results`);
            const data = await response.json();
            setPartners(data.docs);
        } catch (error) {
            console.error('Failed to fetch partners:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {partners && <PaginationBlock items={partners} countItemsPerPage={RESULTS_PER_PAGE} ItemComponent={ResultItem} WrapperItems={ResultsWrapper} />}
        </Suspense>
    );
};