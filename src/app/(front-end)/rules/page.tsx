import Link from "next/link";
import { Metadata } from "next";

import { AtomButton, AtomText, Container, ArrowTo } from "@atoms";
import { generateMeta, getCollectionItem } from "@utils";
import { RulesBlock } from "@organisms";
import { Page } from "@/payload-types";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCollectionItem({ collection: 'pages', slug: 'rules' }) as Page;

  return generateMeta({ doc: page })
}

export default async function Rules() {
  const pageData = await getCollectionItem({ collection: 'pages', slug: 'rules' }) as Page;

  if (!pageData) return <Container>404</Container>;

  return (
    <Container padding roundedBottom fixHeader>
      <AtomText variant="headerH1" asChild>
        <h1>{pageData.title}</h1>
      </AtomText>
      <RulesBlock content={pageData.content} />
      <AtomButton variant="destructive_secondary" asChild className="text-[20px] font-semibold gap-x-[40px] w-max" >
        <Link href={"/"}>
          Переглянути шаблони описів та листів
          <ArrowTo />
        </Link>
      </AtomButton>
    </Container>
  );
}
