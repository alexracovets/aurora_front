import { Suspense } from "react";
import { Metadata } from "next";

import { AtomLink, AtomText, Container, ArrowTo } from "@atoms";
import { ItemsPageContent } from "@molecules";
import { Award, Media } from "@/payload-types";
import { formatDate, generateMeta, getCollection, getCollectionItem } from "@utils";

type PageProps = {
  params: Promise<{
    award_page: string;
  }>;
};

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { award_page } = await params;
  const page = await getCollectionItem({ collection: 'awards', slug: award_page }) as Award;
  return generateMeta({ doc: page })
}

export async function generateStaticParams() {
  try {
    const awards = await getCollection({ collection: 'awards' }) as Award[];
    return awards.map((award: Award) => ({
      award_page: award.slug,
    }));
  } catch (error) {
    console.error('Помилка при генерації статичних параметрів:', error);
    return [];
  }
}

export default async function AwardPage({ params }: PageProps) {
  const { award_page } = await params;
  const pageData = await getCollectionItem({ collection: 'awards', slug: award_page }) as Award;

  if (!pageData) return <Container>404</Container>;

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <AtomLink variant="toBack" href={`/results`}>
        <ArrowTo back /> Назад
      </AtomLink>
      <AtomText variant="headerH1" asChild>
        <h1>{pageData.title}</h1>
      </AtomText>
      {
        pageData.date && (
          <AtomText variant="pageDate" asChild>
            <p>{formatDate(pageData.date)}</p>
          </AtomText>
        )
      }
      {pageData.description && (
        <AtomText variant="pageDescription" asChild>
          <p>{pageData.description}</p>
        </AtomText>
      )}
      <ItemsPageContent content={pageData.content} image={pageData.image as Media} />
    </Suspense>
  );
}