"use client"

import { useState, useEffect } from "react";
import { PaginationBlock } from "@organisms";
import { NewsItem } from "@molecules";
import { NewsWrapper } from "@atoms";
import { getApiNewsList } from "@utils";
import { ApiNewsResponse } from "@/types";

const RESULTS_PER_PAGE = 6;

export const NewsBlock = () => {
    const [news, setNews] = useState<ApiNewsResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const newsData = await getApiNewsList();
                setNews(newsData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Помилка завантаження новин');
                console.error('Помилка при отриманні новин:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div>Завантаження новин...</div>;
    }

    if (error) {
        return <div>Помилка: {error}</div>;
    }

    if (!news) {
        return <div>Новин не знайдено</div>;
    }
    console.log(news);
    return (
        <div className="flex flex-col w-full gap-y-[16px]">
            <PaginationBlock
                items={news.data}
                countItemsPerPage={RESULTS_PER_PAGE}
                ItemComponent={NewsItem}
                WrapperItems={NewsWrapper}
            />
        </div>
    );
};