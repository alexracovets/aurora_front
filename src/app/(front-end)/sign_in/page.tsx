"use client";

import { Container, AtomText } from "@atoms";
import { SignForm } from "@organisms";

export default function SignInPage() {

  return (
    <Container space roundedBottom>
      <AtomText variant="cardTitle" asChild className="mt-[60px] text-[28px]">
        <p>Для можливості подачі запиту про допомогу, Вам потрібно авторизуватися або зареєструватися.</p>
      </AtomText>
      <SignForm />
    </Container>
  );
}