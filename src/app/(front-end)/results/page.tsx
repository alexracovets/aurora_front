import { getPayload } from "payload";
import { Suspense } from "react";

import { AtomText, Container } from "@atoms";
import { ResultsBlock } from "@organisms";
import config from "@/payload.config";

export default async function Results() {
  const payload = await getPayload({ config })

  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'results'
      }
    }
  });

  const pageData = page.docs[0] || null;

  if (!pageData) return <Container space>404</Container>;

  return (
    <Container space className="max-w-[1760px]">
      <Suspense fallback={<>Завантаження...</>}>
        <AtomText variant="h1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
        <ResultsBlock />
      </Suspense>
    </Container>
  );
}
