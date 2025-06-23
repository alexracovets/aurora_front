"use client";

import { NewsBlock } from "@organisms";
import { Container, AtomText } from "@atoms";

export default function News() {
  return (
    <Container space start full>
      <AtomText variant="headerH1" asChild>
        <h1>Новини</h1>
      </AtomText>
      <NewsBlock />
    </Container>
  );
}