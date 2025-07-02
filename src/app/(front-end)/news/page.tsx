import { getPayload } from "payload";
import { Suspense } from "react";
import { Metadata } from "next";

import { AtomText, Container } from "@atoms";
import { NewsBlock } from "@organisms";
import config from "@/payload.config";

export const metadata: Metadata = {
  title: 'Новини | Aurora',
  description: 'Останні новини та події Aurora',
};

export const revalidate = 60; // Альтернативний спосіб встановлення revalidate

export default async function News() {
  const payload = await getPayload({ config })

  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'news'
      }
    }
  });

  const pageData = page.docs[0] || null;
  if (!pageData) return <Container>404</Container>;
  
  let newsData = null;
  try {
    const news = await fetch("https://robota.avrora.ua/api/page/news/", {
      next: {
        revalidate: 60
      }
    });
    
    if (!news.ok) {
      throw new Error(`HTTP error! status: ${news.status}`);
    }
    
    newsData = await news.json();
  } catch (error) {
    console.error('Помилка завантаження новин:', error);
    newsData = [];
  }

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <Container transparent fixHeader>
        <AtomText variant="headerH1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
      </Container>
      <Container transparent>
        <NewsBlock newsData={newsData} />
      </Container>
    </Suspense>
  );
}