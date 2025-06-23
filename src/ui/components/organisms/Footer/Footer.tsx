"use client";

import Link from "next/link";

import { Container, Logo, FooterSocials, AtomHR } from "@atoms";
import { FooterLinks } from "@molecules";

export const Footer = () => {
    return (
        <footer className="shadow-md shadow-[0 -4px 6px -1px] bg-white rounded-t-[30px]">
            <Container space>
                <div className="flex w-full justify-between items-center gap-[1.6rem] mb-[30px]">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <FooterSocials />
                </div>
                <AtomHR className="w-full" />
                <div
                    className="flex w-full justify-between"
                >
                    <div>

                    </div>
                    <FooterLinks />
                </div>
            </Container>
        </footer>
    );
};
