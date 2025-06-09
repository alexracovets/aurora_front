import { AtomText, Container } from "@atoms";
import { ResultsBlock } from "@organisms";
import { getPayload } from "payload";
import config from "@/payload.config";
import { Result } from "@payload-types";

export default async function Results() {

  const payload = await getPayload({ config })

  const results = await payload.find({
    collection: 'results',
    limit: 100,
  })
  console.log(results)
  return (
    <Container space className="max-w-[1760px]">
      <AtomText variant="h1" asChild>
        <h1>Результати роботи</h1>
      </AtomText>
      <ResultsBlock results={results.docs as Result[]} />
    </Container>
  );
}
