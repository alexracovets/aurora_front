import { Suspense } from "react";
import { Metadata } from "next";

import { generateMeta, getCollectionItem, getGalleriesNext, getNeighborGalleries, getCollection } from "@utils";
import { GalleryStateUpdater } from "./GalleryStateUpdater";
import { Container, AtomText, FullscreenImage } from "@atoms";
import { Gallery, Media } from "@payload-types";
import { ShowCaseGallery } from "@organisms";

type PageProps = {
  params: Promise<{
    gallery_page: string;
  }>;
}

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gallery_page } = await params;
  const page = await getCollectionItem({ collection: 'gallery', slug: gallery_page }) as Gallery;

  return generateMeta({ doc: page });
}

export async function generateStaticParams() {
  try {
    const galleries = await getCollection({ collection: 'gallery' }) as Gallery[];
    
    return galleries.map((gallery) => ({
      gallery_page: gallery.slug,
    }));
  } catch (error) {
    console.error('Помилка при генерації статичних параметрів:', error);
    return [];
  }
}

export default async function GalleryPage({ params }: PageProps) {
  const { gallery_page } = await params;
  const pageData = await getCollectionItem({ collection: 'gallery', slug: gallery_page }) as Gallery;
  if (!pageData) return <Container>404</Container>;

  const { nextPage, prevPage } = await getNeighborGalleries(pageData.slug);
  const nextGalleriesResult = await getGalleriesNext(gallery_page, 4);
  const nextGalleries = nextGalleriesResult.success ? nextGalleriesResult.data : [];

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <GalleryStateUpdater slug={pageData.slug} />
      <FullscreenImage
        image={pageData.image as Media}
        alt={pageData.alt}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <AtomText variant="galleryDescription" asChild>
        <h1>{pageData.title}</h1>
      </AtomText>
      <ShowCaseGallery galleries={nextGalleries} />
    </Suspense>
  );
};