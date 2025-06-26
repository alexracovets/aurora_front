import { Suspense } from "react";

import { AtomLink, AtomText, Container, ArrowTo, ItemsPageWrapper } from "@atoms";
import { ItemsPageContent } from "@molecules";
import { Award, Media } from "@/payload-types";
import { getPayload } from "payload";
import config from "@/payload.config";
import { formatDate } from "@utils";

type PageProps = {
  params: Promise<{
    award_page: string;
  }>;
}
export default async function AwardPage({ params }: PageProps) {

  const payload = await getPayload({ config })
  const { award_page } = await params;

  const page = await payload.find({
    collection: 'awards',
    where: {
      slug: {
        equals: award_page
      }
    }
  });
  const pageData = page.docs[0] as Award;

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
}