import { AtomText, Container } from "@atoms";
import { ResultsBlock } from "@organisms";

export default async function Results() {


  return (
    <Container space className="max-w-[1760px]">
      <AtomText variant="h1" asChild>
        <h1>Результати роботи</h1>
      </AtomText>
      <ResultsBlock />
    </Container>
  );
}
