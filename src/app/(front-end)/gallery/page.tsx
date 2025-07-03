import { Suspense } from "react";
import { Metadata } from "next";

import { generateMeta, getCollectionItem } from "@utils";
import { AtomText, Container } from "@atoms";
import { GalleryBlock } from "@organisms";
import { Page } from "@/payload-types";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCollectionItem({ collection: 'pages', slug: 'gallery' }) as Page;

  return generateMeta({ doc: page })
}

export default async function Gallery() {
  const pageData = await getCollectionItem({ collection: 'pages', slug: 'gallery' }) as Page;

  if (!pageData) return <Container>404</Container>;

  return (
    <Suspense fallback={<Container>Завантаження...</Container>}>
      <Container transparent fixHeader>
        <AtomText variant="headerH1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
      </Container>
      <Container transparent>
        <GalleryBlock />
      </Container>
    </Suspense>
  );
}
