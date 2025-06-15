import { getPayload } from "payload";
import { Suspense } from "react";

import { AtomText, Container } from "@atoms";
import { StepsBlock } from "@organisms";
import config from "@/payload.config";

export default async function Home() {
  const payload = await getPayload({ config })

  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: '/'
      }
    }
  });

  const pageData = page.docs[0] || null;

  if (!pageData) return <Container space>404</Container>;

  return (
    <Container space>
      <Suspense fallback={<>Завантаження...</>}>
        <AtomText variant="h1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
        {pageData.blocks?.[0]?.colums && <StepsBlock steps={pageData.blocks[0].colums} />}
      </Suspense>
    </Container>
  );
};