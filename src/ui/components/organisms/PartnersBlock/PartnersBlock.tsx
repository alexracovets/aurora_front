"use client";

import { PaginationBlock } from "@organisms";
import { PartnerItem } from "@molecules";
import { PartnersWrapper } from "@atoms";
import { Suspense, useEffect, useState } from "react";
import { Partner } from "@/payload-types";

export const PartnersBlock = () => {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState(true);
    const RESULTS_PER_PAGE = 6;

    const getData = async () => {
        try {
            const response = await fetch(`/api/partners`);
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
            {partners && <PaginationBlock items={partners} countItemsPerPage={RESULTS_PER_PAGE} ItemComponent={PartnerItem} WrapperItems={PartnersWrapper} />}
        </Suspense>
    );
}