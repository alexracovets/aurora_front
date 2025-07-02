"use client";

import Link from "next/link";

import { Container, Logo, AtomHR } from "@atoms";
import { FooterLinks, FooterInfo, FooterSocials } from "@molecules";

export const Footer = () => {
    return (
        <footer
            className="bg-white"
        >
            <Container transparent padding className="my-0">
                <div className="flex w-full justify-between items-center gap-[1.6rem] mb-[30px]">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <FooterSocials />
                </div>
                <AtomHR className="max-w-[calc(100%-30px)] translate-y-1 bg-light-pink" />
                <div className="flex w-full justify-between">
                    <FooterInfo />
                    <FooterLinks />
                </div>
            </Container>
        </footer>
    );
};
