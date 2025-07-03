import { Suspense } from "react";
import { Metadata } from "next";

import { generateMeta, getCollection, getCollectionItem } from "@utils";
import { AtomText, Container } from "@atoms";
import { PartnersBlock } from "@organisms";
import { Page, Partner } from "@/payload-types";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCollectionItem({ collection: 'pages', slug: 'partners' }) as Page;

  return generateMeta({ doc: page })
}

export default async function Partners() {
  const pageData = await getCollectionItem({ collection: 'pages', slug: 'partners' }) as Page;
  if (!pageData) return <Container>404</Container>;
  const partners = await getCollection({ collection: 'partners' }) as Partner[];

  return (
    <Suspense fallback={<Container>Завантаження...</Container>}>
      <Container transparent fixHeader>
        <AtomText variant="headerH1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
      </Container>
      <Container transparent>
        <PartnersBlock items={partners} />
      </Container>
    </Suspense>
  );
}
