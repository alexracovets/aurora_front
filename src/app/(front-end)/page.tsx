import { Suspense } from "react";
import { Metadata } from "next";

import { AtomText, Container } from "@atoms";
import { StepsBlock } from "@organisms";
import { Page } from "@/payload-types";
import { generateMeta, getCollectionItem } from "@utils";

export const revalidate = 60;
export const dynamicParams = false;

export async function generateMetadata(): Promise<Metadata> {
    const page = await getCollectionItem({ collection: 'pages', slug: '' });

    return generateMeta({ doc: page })
}

export default async function Home() {
    const pageData = await getCollectionItem({ collection: 'pages', slug: '' }) as Page;

    if (!pageData) return <Container>404</Container>;
    return (
        <Suspense fallback={<>Завантаження...</>}>
            <Container transparent fixHeader>
                <AtomText variant="headerH1" asChild>
                    <h1>{pageData.title}</h1>
                </AtomText>
            </Container>
            <Container transparent>
                <StepsBlock steps={pageData?.steps} />
            </Container>
        </Suspense>
    );
};