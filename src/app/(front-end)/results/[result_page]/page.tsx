import { Suspense } from "react";
import { Metadata } from "next";


import { Container, AtomText, ItemsPageWrapper, ArrowTo, AtomLink } from "@atoms";
import { formatDate, generateMeta, getCollectionItem } from "@utils";
import { ItemsPageContent } from "@molecules";
import { Media, Result } from "@payload-types";

type PageProps = {
  params: Promise<{
    result_page: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { result_page } = await params;
  const page = await getCollectionItem({ collection: 'results', slug: result_page }) as Result;
  return generateMeta({ doc: page })
}

export default async function ResultPage({ params }: PageProps) {
  const { result_page } = await params;
  const pageData = await getCollectionItem({ collection: 'results', slug: result_page }) as Result;

  if (!pageData) return <Container>404</Container>;

  return (
    <ItemsPageWrapper>
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
    </ItemsPageWrapper>
  );
};