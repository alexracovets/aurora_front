"use client";

import { Container } from "@atoms";
import { useEffect, useState, use } from "react";

import { StepType } from "@types";
import { StepsData } from "@data";
import Image from "next/image";

interface ExampleStepsProps {
  params: Promise<{ steps: string; }>
}

export default function Steps({ params }: ExampleStepsProps) {
  const [data, setData] = useState<StepType | null>(null);
  const resolvedParams = use(params);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (slug: string) => {
    const data = StepsData.find((item) => item.slug === slug);
    if (!data) return setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchData(resolvedParams.steps);
  }, [resolvedParams]);

  if (!data && !isLoading) return <Container space>404</Container>;
  if (!data) return <Container space>Loading...</Container>;

  return (
    <Container space>
      <h1 className="text-[64px] font-bold mb-[48px]">{data.title}</h1>
      <div
        className="w-[70dvw] h-[30dvw] relative mb-[32px]"
      >
        <Image src={'/images/aurora.jpg'} alt={data.title} fill className="object-cover" />
      </div>
      <div className="w-full flex flex-col gap-y-[8px]">
        {data.description.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
    </Container>
  );
}