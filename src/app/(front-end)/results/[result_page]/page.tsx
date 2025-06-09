"use client";

import { Container } from "@atoms";
import { useEffect, useState, use } from "react";

import { NewsType } from "@types";
import { NewsData } from "@data";

interface ExampleStepsProps {
  params: Promise<{ news_page: string; }>
}

export default function ResultPage({ params }: ExampleStepsProps) {
  const [data, setData] = useState<NewsType | null>(null);
  const resolvedParams = use(params);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (slug: string) => {
    const data = NewsData.find((item) => item.slug === slug);
    if (!data) return setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchData(resolvedParams.news_page);
  }, [resolvedParams]);

  if (!data && !isLoading) return <Container space>404</Container>;
  if (!data) return <Container space>Loading...</Container>;

  return (
    <Container space>
      <h1 className="text-[64px] font-bold mb-[48px]">{data.title}</h1>
    </Container>
  );
}