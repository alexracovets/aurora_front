import { Suspense } from "react";
import { Metadata } from "next";

import { generateMeta, getCollectionItem, getNews, getPayloadItem } from "@utils";
import { AtomText, Container } from "@atoms";
import { NewsBlock } from "@organisms";
import { Page } from "@/payload-types";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCollectionItem({ collection: 'pages', slug: 'news' }) as Page;

  return generateMeta({ doc: page })
}

export default async function News() {
  const pageData = await getPayloadItem('pages', 'news') as Page;

  if (!pageData) return <Container>404</Container>;

  const newsData = await getNews();

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <Container transparent fixHeader>
        <AtomText variant="headerH1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
      </Container>
      <Container transparent>
        <NewsBlock items={newsData} />
      </Container>
    </Suspense>
  );
}