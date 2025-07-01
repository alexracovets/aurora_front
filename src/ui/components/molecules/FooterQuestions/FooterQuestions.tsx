"use client";

import { LuPhoneCall } from "react-icons/lu";
import { AtomLink, AtomText } from "@atoms";
import Link from "next/link";
import { cn } from "@utils";

export const FooterQuestions = () => {
    return (
        <div className="flex items-start gap-x-[10px]">
            <Link
                href="tel:+380800300066"
                className={cn(
                    "relative translate-y-[4px]",
                    "before:content-[''] before:absolute before:left-[50%] before:top-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:w-[40px] before:h-[40px] before:bg-yellow before:rounded-full"
                )}
            >
                <LuPhoneCall className="text-[20px] relative z-[1]" />
            </Link>
            <div className="flex flex-col gap-y-[8px] pl-[8px]">
                <div className="flex flex-col gap-y-[4px]">
                    <AtomText variant="footerTitle">
                        З’явилися додаткові питання?
                    </AtomText>
                    <AtomText variant="footerText">
                        Ми можемо тобі допомогти
                    </AtomText>
                </div>
                <div className="flex items-center gap-x-[13px]">
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