import { MoveLeft } from "lucide-react";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import { AtomButton, AtomText, Container } from "@atoms";
import { Award } from "@/payload-types";
import { getPayload } from "payload";
import config from "@/payload.config";

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
  const pageData = page.docs[0] as Award || null;

  if (!pageData) return <Container space>404</Container>;

  return (
    <Container space>
      <Suspense fallback={<>Завантаження...</>}>
        <div className="flex flex-col w-full">
          <AtomButton variant="toBack" asChild>
            <Link href={`/awards`}>
              <MoveLeft className="w-[24px] text-yellow" />
              Назад
            </Link>
          </AtomButton>
          <AtomText variant="h1_secondary" asChild className="text-left mb-[10px]">
            <h1>{pageData.title}</h1>
          </AtomText>
          <AtomText variant="text" asChild className="text-left mb-[35px]">
            <p>{pageData.date ? new Date(pageData.date).toLocaleDateString('uk-UA') : ''}</p>
          </AtomText>
          <div className="relative">
            {
              pageData.image && typeof pageData.image === 'object' && 'url' in pageData.image && pageData.image.url && (
                <div className="w-[807px] h-[440px] relative rounded-[30px] overflow-hidden float-left mr-[80px] mb-[70px]">
                  <Image src={pageData.image.url} alt={pageData.image.alt || 'alt'} fill className="object-cover" />
                </div>
              )
            }
            <div className="gap-y-[28px]">
              {
                pageData.content?.root?.children?.map((child: { type: string; children?: Array<{ text: string }> }, index) => {
                  if (child.type === 'paragraph') {
                    return (
                      <AtomText variant="paragraph" key={index}>
                        {child?.children?.[0]?.text}
                      </AtomText>
                    )
                  }
                })
              }
            </div>
          </div>
          <div className="clear-both"></div>
        </div>
      </Suspense>
    </Container>
  );
}