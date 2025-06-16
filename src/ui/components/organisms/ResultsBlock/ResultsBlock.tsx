"use client";

import { Suspense, useEffect, useState } from "react";

import { PaginationBlock } from "@organisms";
import { ResultItem } from "@molecules";
import { ResultsWrapper } from "@atoms";
import { Partner } from "@/payload-types";

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export const ResultsBlock = () => {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch(`${API_URL}/api/results`);
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
            {partners && <PaginationBlock items={partners} countItemsPerPage={8} ItemComponent={ResultItem} WrapperItems={ResultsWrapper} />}
        </Suspense>
    );
}