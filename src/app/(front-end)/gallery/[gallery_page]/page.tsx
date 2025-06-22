
import { getPayload } from "payload";
import { Suspense } from "react";
import Image from "next/image";

import { Container, AtomText } from "@atoms";
import { Gallery } from "@payload-types";
import config from "@/payload.config";

type PageProps = {
  params: Promise<{
    gallery_page: string;
  }>;
}

export default async function GalleryPage({ params }: PageProps) {
  const payload = await getPayload({ config })
  const { gallery_page } = await params;

  const page = await payload.find({
    collection: 'gallery',
    where: {
      slug: {
        equals: gallery_page
      }
    }
  });

  const pageData = page.docs[0] as Gallery || null;

  if (!pageData) return <Container space>404</Container>;

  return (
    <Container space className="max-w-[1760px]">
      <Suspense fallback={<>Завантаження...</>}>
        <div className="flex flex-col w-full">
          <div className="relative w-[1166px] h-[616px] mx-auto mb-[16px] rounded-[20px] overflow-hidden">
            <Image src={pageData.url ? pageData.url : ""} alt={pageData.alt} fill />
          </div>
          <AtomText variant="h3" asChild className="text-center">
            <h1>{pageData.title}</h1>
          </AtomText>
        </div>
      </Suspense>
    </Container>
  );
};