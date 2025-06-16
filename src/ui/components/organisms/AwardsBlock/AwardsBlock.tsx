"use client";

import { Suspense, useEffect, useState } from "react";

import { PaginationBlock } from "@organisms";
import { AwardItem } from "@molecules";
import { AwardsWrapper } from "@atoms";
import { Award } from "@/payload-types";

export const AwardsBlock = () => {
    const [awards, setAwards] = useState<Award[]>([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch(`/api/awards`);
            const data = await response.json();
            setAwards(data.docs);
        } catch (error) {
            console.error('Failed to fetch awards:', error);
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
            {awards && <PaginationBlock items={awards} countItemsPerPage={8} ItemComponent={AwardItem} WrapperItems={AwardsWrapper} />}
        </Suspense>
    );
};