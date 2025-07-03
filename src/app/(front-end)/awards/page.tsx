import { Suspense } from "react";
import { Metadata } from "next";

import { generateMeta, getCollection, getCollectionItem } from "@utils";
import { AtomText, Container } from "@atoms";
import { AwardsBlock } from "@organisms";
import { Award, Page } from "@/payload-types";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCollectionItem({ collection: 'pages', slug: 'awards' }) as Page;

  return generateMeta({ doc: page })
}

export default async function Awards() {
  const pageData = await getCollectionItem({ collection: 'pages', slug: 'awards' }) as Page;

  if (!pageData) return <Container>404</Container>;

  const awards = await getCollection({ collection: 'awards' }) as Award[];

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <Container transparent fixHeader>
        <AtomText variant="headerH1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
      </Container>
      <Container transparent>
        <AwardsBlock items={awards} />
      </Container>
    </Suspense>
  );
}
