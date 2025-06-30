"use client";

import { Container } from "@atoms";
import { useEffect, useState, use } from "react";

import { getApiNewsBySlug } from "@utils";
import { ApiNewsResponse } from "@/types";

interface ExampleStepsProps {
  params: Promise<{ news_page: string; }>
}

export default function NewsPage({ params }: ExampleStepsProps) {
  const resolvedParams = use(params);
  const [news, setNews] = useState<ApiNewsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const newsData = await getApiNewsBySlug(resolvedParams.news_page);
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

  if (loading) return <div>Завантаження новин...</div>;
  if (error) return <div>Помилка: {error}</div>;
  if (!news) return <div>Новини не знайдено</div>;

  return (
    <Container space>
      <h1 className="text-[64px] font-bold mb-[48px]">{news.data[0].title}</h1>
    </Container>
  );
}