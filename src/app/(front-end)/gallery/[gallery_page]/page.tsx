"use server";

import { Container, AtomText, } from "@atoms";
import { Suspense } from "react";
import Image from "next/image";

import { Gallery } from "@payload-types";
import { GalleryStateUpdater } from "./GalleryStateUpdater";
import { getCollectionItem, getGalleries } from "@/utils";

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

  return (
    <>
      <GalleryStateUpdater slug={pageData.slug} />
      <Suspense fallback={<>Завантаження...</>}>
        <div className="flex flex-col w-full">
          <div className="relative w-[1166px] h-[616px] mx-auto mb-[16px] rounded-[20px] overflow-hidden">
            <Image src={pageData.url ? pageData.url : ""} alt={pageData.alt} fill className="object-cover" />
          </div>
          <AtomText variant="h3" asChild className="text-center">
            <h1>{pageData.title}</h1>
          </AtomText>
        </div>
      </Suspense>
    </>
  );
};