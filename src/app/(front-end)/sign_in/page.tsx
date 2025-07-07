"use client";

import { Container } from "@atoms";
import { FillPhone, SMSVerification } from "@organisms";
import { useUserInfo } from "@store";

export default function SignInPage() {
  const { isPhoneFilled } = useUserInfo();

  return (
    <Container padding roundedBottom roundedTop fixedMargin>
      {!isPhoneFilled && <FillPhone />}
      {isPhoneFilled && <SMSVerification />}
    </Container>
  );
}