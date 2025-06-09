"use client";

import { AtomText, Container } from "@atoms";
import { ResultsBlock } from "@organisms";
import { Page } from "@payload-types";
import { useEffect, useState } from "react";

export default function Results() {
  const [data, setData] = useState<Page | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSection = async () => {
      try {
        const res = await fetch(`/api/pages?where[slug][equals]=results`);
        const data = await res.json();
        if (data?.docs?.length > 0) {
          setData(data.docs[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSection();
  }, []);

  if (!data && !isLoading) return <Container space>404</Container>;
  if (!data) return <Container space>Loading...</Container>;

  return (
    <Container space className="max-w-[1760px]">
      <AtomText variant="h1" asChild>
        <h1>{data.title}</h1>
      </AtomText>
      <ResultsBlock />
    </Container>
  );
}
