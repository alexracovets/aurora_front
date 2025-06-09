"use client";
import { MoveRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

import { AtomButton, AtomText, Container } from "@atoms";
import { Page } from "@payload-types";

export default function Rules() {
  const [data, setData] = useState<Page | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSection = async () => {
      const res = await fetch(
        `/api/pages?where[slug][equals]=rules`
      );
      const data = await res.json();
      if (data?.docs?.length > 0) {
        setData(data.docs[0]);
      }
      setIsLoading(false);
    };

    fetchSection();
  }, []);

  if (!data && !isLoading) return <Container space>404</Container>;
  if (!data) return <Container space>Loading...</Container>;
  
  return (
    <Container space>
      <AtomText variant="h1" asChild>
        <h1>{data.title}</h1>
      </AtomText>
      <div
        className="flex flex-col gap-y-[28px] mb-[80px]"
      >
        {
          data.content?.root?.children?.map((child: { type: string; children?: Array<{ text: string }> }, index) => {
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
      <AtomButton variant="destructive_secondary" asChild className="text-[20px] font-semibold gap-x-[40px] w-max" >
        <Link href={"/"}>
          Переглянути шаблони описів та листів
          <MoveRight size={24} className="text-yellow" />
        </Link>
      </AtomButton>
    </Container>
  );
}
