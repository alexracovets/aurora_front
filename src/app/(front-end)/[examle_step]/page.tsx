"use client";

import { Container } from "@atoms";
import { useEffect, useState } from "react";

interface ExampleStepsProps {
  params: {
    examle_step: string;
  }
}
export default function ExampleSteps({ params }: ExampleStepsProps) {
  const [step, setStep] = useState<string>("");


  useEffect(() => {
    const fetchData = async () => {
      const { examle_step } = await params;
      setStep(examle_step);
    };
    fetchData();
  }, [params]);

  return (
    <Container space>
      {step}
    </Container>
  );
}