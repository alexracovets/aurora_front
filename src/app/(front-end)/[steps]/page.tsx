"use client";

import { Container } from "@atoms";
import { useEffect, useState, use } from "react";

import { ExampleStepType } from "@types";
import { ExampleStepsData } from "@data";

interface ExampleStepsProps {
  params: Promise<{ steps: string; }>
}

export default function Steps({ params }: ExampleStepsProps) {
  const [data, setData] = useState<ExampleStepType | null>(null);
  const resolvedParams = use(params);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (slug: string) => {
    const data = ExampleStepsData.find((item) => item.slug === slug);
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
      {data?.title}
    </Container>
  );
}