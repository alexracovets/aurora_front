import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { Container, AtomButton, AtomText } from "@atoms";
import { Result } from "@payload-types";
import { getPayload } from "payload";
import config from "@/payload.config";

interface ExampleStepsProps {
  params: { result_page: string; }
}

export default async function ResultPage({ params }: ExampleStepsProps) {
  const payload = await getPayload({ config })

  const page = await payload.find({
    collection: 'results',
    where: {
      slug: {
        equals: params.result_page
      }
    }
  });

  const pageData = page.docs[0] as Result || null;

  if (!pageData) return <Container space>404</Container>;

  return (
    <Container space>
      <Suspense fallback={<>Завантаження...</>}>
        <div className="flex flex-col w-full">
          <AtomButton variant="toBack" asChild>
            <Link href={`/results`}>
              <MoveLeft className="w-[24px] text-yellow" />
              Назад
            </Link>
          </AtomButton>
          <AtomText variant="h1_secondary" asChild className="text-left">
            <h1>{pageData.title}</h1>
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
};