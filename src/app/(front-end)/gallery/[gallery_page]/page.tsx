"use server";

import { Gallery, Media } from "@payload-types";
import { Suspense } from "react";

import { Container, AtomText, FullscreenImage } from "@atoms";
import { getCollectionItem, getGalleries, getGalleriesNext } from "@utils";
import { getNeighborGalleries } from "@hooks";
import { GalleryStateUpdater } from "./GalleryStateUpdater";
import { ShowCaseGallery } from "@organisms";
import { PreloadImages } from "./PreloadImages";

type PageProps = {
  params: Promise<{
    gallery_page: string;
  }>;
}

// статична генерація
export async function generateStaticParams() {
  const galleries = await getGalleries();

  return galleries.map((gallery) => ({
    gallery_page: gallery.slug,
  }));
}

export default async function GalleryPage({ params }: PageProps) {
  const { gallery_page } = await params;
  const page = await getCollectionItem({ collection: 'gallery', slug: gallery_page });
  const pageData = page as Gallery || null;
  if (!pageData) return <Container space>404</Container>;
  const { nextPage, prevPage } = await getNeighborGalleries(pageData.slug);

  // Отримуємо наступні галереї для preloading
  const nextGalleriesResult = await getGalleriesNext(gallery_page, 4);
  const nextGalleries = nextGalleriesResult.success ? nextGalleriesResult.data : [];

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <GalleryStateUpdater slug={pageData.slug} />
      <PreloadImages galleries={nextGalleries} />
      <FullscreenImage
        image={pageData.image as Media}
        alt={pageData.alt}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <AtomText variant="galleryDescription" asChild>
        <h1>{pageData.title}</h1>
      </AtomText>
      <ShowCaseGallery />
    </Suspense>
  );
};