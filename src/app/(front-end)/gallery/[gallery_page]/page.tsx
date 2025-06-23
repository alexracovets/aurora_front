"use server";

import { Suspense } from "react";
import Link from "next/link";

import { Container, AtomText, ArrowPrev, ArrowNext, FullscreenImage } from "@atoms";
import { cn, getCollectionItem, getGalleries } from "@/utils";
import { GalleryStateUpdater } from "./GalleryStateUpdater";
import { getNeighborGalleries } from "@hooks";
import { Gallery, Media } from "@payload-types";

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
  console.log(pageData)
  return (
    <div className="w-full relative">

      <Link href={prevPage?.slug ? `/gallery/${prevPage?.slug}` : ""} className={cn(
        "absolute top-[50%] left-0 w-[65px] h-[65px] rounded-[50%] bg-white flex justify-center items-center",
        !prevPage?.slug ? "pointer-events-none pointer-none opacity-50" : ""
      )}>
        <ArrowPrev />
      </Link>
      <GalleryStateUpdater slug={pageData.slug} />
      <Suspense fallback={<>Завантаження...</>}>
        <div className="flex flex-col w-full">
          <div className="relative w-[1166px] h-[616px] mx-auto mb-[16px] rounded-[20px] overflow-hidden">
            <FullscreenImage
              image={pageData.image as Media}
              alt={pageData.alt}
              className="w-full h-full"
            />
          </div>
          <AtomText variant="h3" asChild className="text-center">
            <h1>{pageData.title}</h1>
          </AtomText>
        </div>
      </Suspense>
      <Link
        href={nextPage?.slug ? `/gallery/${nextPage.slug}` : ""}
        className={cn(
          "absolute top-[50%] right-0 w-[65px] h-[65px] rounded-[50%] bg-white flex justify-center items-center",
          !nextPage?.slug ? "pointer-events-none pointer-none opacity-50" : ""
        )}>
        <ArrowNext />
      </Link>
    </div>
  );
};