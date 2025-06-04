"use client";

import { NewsBlock } from "@organisms";
import { Container, AtomText } from "@atoms";

export default function News() {
  return (
    <Container space className="max-w-[1760px]">
      <AtomText variant="h1" asChild>
        <h1>Новини</h1>
      </AtomText>
      <NewsBlock />
    </Container>
  );
}