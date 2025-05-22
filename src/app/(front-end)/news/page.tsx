"use client";

import { NewsBlock } from "@organisms";
import { Container } from "@atoms";

export default function News() {
  return (
    <Container space>
      <h1 className="text-[64px] text-center font-bold mb-[48px]">Новини</h1>
      <NewsBlock />
    </Container>
  );
}