import { Suspense } from "react";
import { Metadata } from "next";


import { generateMeta, getCollection, getCollectionItem } from "@utils";
import { AtomText, Container } from "@atoms";
import { ResultsBlock } from "@organisms";
import { Page, Result } from "@/payload-types";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCollectionItem({ collection: 'pages', slug: 'results' }) as Page;

  return generateMeta({ doc: page })
}

export default async function Results() {
  const pageData = await getCollectionItem({ collection: 'pages', slug: 'results' }) as Page;
  if (!pageData) return <Container>404</Container>;
  const results = await getCollection({ collection: 'results' }) as Result[];
  
  return (
    <Suspense fallback={<>Завантаження...</>}>
      <Container transparent fixHeader>
        <AtomText variant="headerH1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
      </Container>
      <Container transparent>
        <ResultsBlock items={results} />
      </Container>
    </Suspense>
  );
}
