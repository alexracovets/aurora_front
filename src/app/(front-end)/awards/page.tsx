import { getPayload } from "payload";
import { Suspense } from "react";

import { AtomText, Container } from "@atoms";
import { AwardsBlock } from "@organisms";
import config from "@/payload.config";

export default async function Awards() {
  const payload = await getPayload({ config })

  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'awards'
      }
    }
  });

  const pageData = page.docs[0] || null;

  if (!pageData) return <Container>404</Container>;

  return (
    <Suspense fallback={<>Завантаження...</>}>
      <Container roundedBottom>
        <AtomText variant="headerH1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
      </Container>
      <Container transparent className="px-0">
        <AwardsBlock />
      </Container>
    </Suspense>
  );
}
