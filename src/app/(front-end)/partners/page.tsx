import { getPayload } from "payload";
import { Suspense } from "react";

import { AtomText, Container } from "@atoms";
import { PartnersBlock } from "@organisms";
import config from "@/payload.config";

export default async function Partners() {
  const payload = await getPayload({ config })

  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'partners'
      }
    }
  });

  const pageData = page.docs[0] || null;

  if (!pageData) return <Container>404</Container>;

  return (
    <Suspense fallback={<Container>Завантаження...</Container>}>
      <Container transparent fixHeader>
        <AtomText variant="headerH1" asChild>
          <h1>{pageData.title}</h1>
        </AtomText>
      </Container>
      <Container transparent>
        <PartnersBlock />
      </Container>
    </Suspense>
  );
}
