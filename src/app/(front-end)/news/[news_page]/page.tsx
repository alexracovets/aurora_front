import { Suspense } from "react";
import { Metadata } from "next";

import { generateMeta, getCollectionItem, getNews, getNewsItem } from "@utils";
import { NewsItemContent } from "@molecules";
import { Page } from "@/payload-types";
import { ApiNewsItem } from "@/types";
import { formatDate } from "@utils";
import { AtomText } from "@atoms";

import "@styles/news_content.scss";

export const revalidate = 60;
export const dynamicParams = false;

interface ExampleStepsProps {
  params: Promise<{ news_page: string; }>
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCollectionItem({ collection: 'pages', slug: 'news' }) as Page;

  return generateMeta({ doc: page })
}

export async function generateStaticParams() {
  try {
    const news = await getNews();
    return news.map((news: ApiNewsItem) => ({
      news_page: news.slug,
    }));
  } catch (error) {
    console.error('Помилка при генерації статичних параметрів:', error);
    return [];
  }
}

export default async function NewsPage({ params }: ExampleStepsProps) {
  const { news_page } = await params;
  const pageData = await getNewsItem(news_page) as ApiNewsItem;

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <AtomText variant="headerH1" asChild >
        <h1> {pageData.title}</h1>
      </AtomText >
      {pageData.date && <AtomText variant="pageDate" asChild><p>{formatDate(pageData.date)}</p></AtomText>}
      <div className="page-content mb-[32px]" dangerouslySetInnerHTML={{ __html: pageData.short_description ?? "" }} />
      <NewsItemContent content={pageData.description} image={pageData.images.banner[0]} />
    </Suspense>
  );
}