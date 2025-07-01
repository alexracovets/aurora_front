"use client";

import { useEffect, useState, use } from "react";


import { ApiNewsResponse, ApiNewsItem } from "@types";
import { NewsItemContent } from "@molecules";
import { getApiNewsBySlug } from "@utils";
import { formatDate } from "@utils";
import { AtomText } from "@atoms";

import "@styles/news_content.scss";

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

  const pageData = news.data[0] as ApiNewsItem;

  return (
    <div className="flex flex-col w-full">
      <AtomText variant="headerH1" asChild className="pt-0 mt-[16px]">
        <h1> {pageData.title}</h1>
      </AtomText >
      {
        pageData.date && (
          <AtomText variant="pageDate" asChild>
            <p>{formatDate(pageData.date)}</p>
          </AtomText>
        )
      }
      <div className="page-content mb-[32px]" dangerouslySetInnerHTML={{ __html: pageData.short_description ?? "" }} />
      <NewsItemContent content={pageData.description} image={pageData.images.banner[0]} />
    </div >
  );
}