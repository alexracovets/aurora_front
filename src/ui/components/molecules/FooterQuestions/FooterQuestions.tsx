"use client";

import { LuPhoneCall } from "react-icons/lu";
import { AtomLink, AtomText } from "@atoms";

export const FooterQuestions = () => {
    return (
        <div
            className="flex items-start gap-x-[10px]"
        >
            <LuPhoneCall className="text-[24px]" />
            <div className="flex flex-col gap-y-[8px]">
                <AtomText variant="footerTitle">
                    З’явилися додаткові питання?
                </AtomText>
                <AtomText variant="footerText">
                    Ми можемо тобі допомогти
                </AtomText>
                <div className="flex items-center gap-x-[13px] mb-[16px]">
                    <AtomLink
                        href="tel:+380800300066"
                        variant="footerCall"
                    >
                        0 (800) 30 00 66
                    </AtomLink>
                    <AtomText variant="footerText">
                        безкоштовно
                    </AtomText>
                </div>
                <AtomLink
                    href="mailto:info@avrora.ua"
                    variant="footerMail"
                >
                    info@avrora.ua
                </AtomLink>
                <AtomLink
                    href="mailto:pr@avrora.ua"
                    variant="footerMail"
                >
                    pr@avrora.ua
                </AtomLink>
            </div>
        </div>
    )
}