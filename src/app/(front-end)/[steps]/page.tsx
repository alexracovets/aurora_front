"use client";

import { Container } from "@atoms";
import { useEffect, useState, use } from "react";
import { findData } from "@utils";
import { StepType } from "@types";
import Image from "next/image";
import { getPayload } from "payload";
import configPromise from "@payload-config";

interface ExampleStepsProps {
  params: Promise<{ steps: string; }>
}

export default function Steps({ params }: ExampleStepsProps) {
  const [data, setData] = useState<StepType | null>(null);
  const resolvedParams = use(params);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSection = async () => {
      const res = await fetch(
        `/api/missions?where[slug][equals]=${resolvedParams.steps}`
      );
      const data = await res.json();

      if (data?.docs?.length > 0) {
        setData(data.docs[0]);
      }
      setIsLoading(false);
    };

    fetchSection();
  }, [params]);
  console.log(data)
  if (!data && !isLoading) return <Container space>404</Container>;
  if (!data) return <Container space>Loading...</Container>;

  return (
    <Container space>
      <h1 className="text-[64px] font-bold mb-[48px]">{data.title}</h1>
      <div className="w-[70dvw] h-[30dvw] relative mb-[32px]">
        <Image src={data.photo.url} alt={data.title} fill className="object-cover" />
      </div>
      <div className="w-full flex flex-col gap-y-[8px]">
        {
          data.content.text.root.children.map((item, idx) => {
            return (
              <p key={idx}>{item.children[0].text}</p>
            )
          })
        }
      </div>
    </Container>
  );
}