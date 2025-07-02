import { getPayload } from "payload";
import { Suspense } from "react";

import { AtomText, Container } from "@atoms";
import { StepsBlock } from "@organisms";
import { Page } from "@/payload-types";
import config from "@/payload.config"; 

export default async function Home() {
    const payload = await getPayload({ config })

    const page = await payload.find({
        collection: 'pages',
        where: {
            slug: {
                equals: ''
            }
        }
    });

    const pageData = page.docs[0] as Page;

    if (!pageData) return <Container>404</Container>;

    return (
        <Suspense fallback={<>Завантаження...</>}>
            <Container transparent fixHeader>
                <AtomText variant="headerH1" asChild>
                    <h1>{pageData.title}</h1>
                </AtomText>
            </Container>
            <Container transparent>
                <StepsBlock steps={pageData.steps} />
            </Container>
        </Suspense>
    );
};