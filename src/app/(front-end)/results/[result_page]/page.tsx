"use client";

import { useState, use, useEffect } from "react";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

import { Container, AtomButton, AtomText } from "@atoms";
import { Result } from "@payload-types";
import Image from "next/image";

interface ExampleStepsProps {
  params: Promise<{ result_page: string; }>
}

export default function ResultPage({ params }: ExampleStepsProps) {
  const [data, setData] = useState<Result | null>(null);
  const resolvedParams = use(params);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSection = async () => {
      const res = await fetch(
        `/api/results?where[slug][equals]=${resolvedParams.result_page}`
      );
      const data = await res.json();

      if (data?.docs?.length > 0) {
        setData(data.docs[0]);
      }
      setIsLoading(false);
    };

    fetchSection();
  }, [params]);

  if (!data && !isLoading) return <Container space>404</Container>;
  if (!data) return <Container space>Loading...</Container>;

  return (
    <Container space>
      <div className="flex flex-col w-full">
        <AtomButton variant="toBack" asChild>
          <Link href={`/results`}>
            <MoveLeft className="w-[24px] text-yellow" />
            Назад
          </Link>
        </AtomButton>
        <AtomText variant="h1_secondary" asChild className="text-left">
          <h1>{data.title}</h1>
        </AtomText>
        <div className="relative">
          {
            data.image && typeof data.image === 'object' && 'url' in data.image && data.image.url && (
              <div className="w-[807px] h-[440px] relative rounded-[30px] overflow-hidden float-left mr-[80px] mb-[70px]">
                <Image src={data.image.url} alt={data.image.alt || 'alt'} fill className="object-cover" />
              </div>
            )
          }
          {
            data.content && typeof data.content === 'object' && 'root' in data.content && data.content.root && 'children' in data.content.root && data.content.root.children &&
            data.content.root.children.map((child, index) => {
              const node = child as { type: string; children?: Array<{ text: string }> };
              return node.type === 'paragraph' && node.children && (
                <AtomText variant="paragraph" key={index}>
                  {node.children[0].text}
                </AtomText>
              );
            })
          }

          <div className="clear-both"></div>
        </div>
      </div>
    </Container>
  );
};