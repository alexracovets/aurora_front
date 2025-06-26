import { getPayload } from "payload";
import { Suspense } from "react";


import { Container, AtomText, ItemsPageWrapper, ArrowTo, AtomLink } from "@atoms";
import { ItemsPageContent } from "@molecules";
import { Media, Result } from "@payload-types";
import config from "@/payload.config";
import { formatDate } from "@utils";

type PageProps = {
  params: Promise<{
    result_page: string;
  }>;
}

export default async function ResultPage({ params }: PageProps) {

  const payload = await getPayload({ config })
  const { result_page } = await params;

  const page = await payload.find({
    collection: 'results',
    where: {
      slug: {
        equals: result_page
      }
    }
  });

  const pageData = page.docs[0] as Result;

  if (!pageData) return <Container space>404</Container>;

  return (
    <ItemsPageWrapper>
      <Suspense fallback={<>Завантаження...</>}>
        <AtomLink variant="toBack" href={`/results`}>
          <ArrowTo back /> Назад
        </AtomLink>
        <AtomText variant="headerH1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
        <AtomText variant="pageDate" asChild>
          <p>{formatDate(pageData.date)}</p>
        </AtomText>
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