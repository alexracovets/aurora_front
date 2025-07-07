"use client";

import { SignForm } from "@molecules";
import { AtomText } from "@atoms";

import { useUserInfo } from "@store";

export const SMSVerification = () => {
    const { isPhoneFilled } = useUserInfo();

    return (
        <>
            <AtomText variant="cardTitle" asChild className="mt-[60px] text-[28px]">
                <p>Код підтвердження відправлено на номер {isPhoneFilled}</p>
            </AtomText>
            <SignForm />
        </>
    );
};