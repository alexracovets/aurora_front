import { Suspense } from "react";

import { NewsItemContent } from "@molecules";
import { getNewsItem } from "@utils";
import { formatDate } from "@utils";
import { AtomText } from "@atoms";
import { ApiNewsItem } from "@/types";

import "@styles/news_content.scss";

interface ExampleStepsProps {
  params: Promise<{ news_page: string; }>
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