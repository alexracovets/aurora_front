import { getPayload } from "payload";
import Link from "next/link";

import { AtomButton, AtomText, Container, ArrowTo } from "@atoms";
import { RulesBlock } from "@organisms";
import config from "@/payload.config";

export default async function Rules() {
  const payload = await getPayload({ config })

  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'rules'
      }
    }
  });

  const pageData = page.docs[0] || null;

  if (!pageData) return <Container space>404</Container>;

  return (
    <Container space>
      <AtomText variant="headerH1" asChild>
        <h1>{pageData.title}</h1>
      </AtomText>
      {pageData.content?.root?.children && <RulesBlock content={pageData.content?.root?.children as any} />}
      <AtomButton variant="destructive_secondary" asChild className="text-[20px] font-semibold gap-x-[40px] w-max" >
        <Link href={"/"}>
          Переглянути шаблони описів та листів
          <ArrowTo />
        </Link>
      </AtomButton>
    </Container>
  );
}
