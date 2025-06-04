import { AtomText, Container } from "@atoms";
import { StepsBlock } from "@organisms";
import { getPayload } from "payload";
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

  return (
    <Container space className="max-w-[1760px]">
      <AtomText variant="h1" asChild>
        <h1>{page.docs[0].title}</h1>
      </AtomText>
      <StepsBlock />
    </Container>
  );
}
