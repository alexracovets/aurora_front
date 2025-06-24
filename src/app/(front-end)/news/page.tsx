import { getPayload } from "payload";

import { AtomText, Container } from "@atoms";
import { NewsBlock } from "@organisms";
import config from "@/payload.config";

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

  if (!pageData) return <Container space>404</Container>;

  return (
    <Container space start full>
      <AtomText variant="headerH1" asChild>
        <h1>{pageData.title}</h1>
      </AtomText>
      <NewsBlock />
    </Container>
  );
}