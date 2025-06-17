"use client";

import Link from "next/link";
import Headroom from "react-headroom";

import { Container, Logo } from "@atoms";
import { HeaderNavigation } from "@molecules";

export const Header = () => {
    return (
        <Headroom>
            <header className="shadow-md bg-white">
                <Container className="flex items-center gap-x-[16px] py-[12px]">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <HeaderNavigation />
                </Container>
            </header>
        </Headroom>
    )
};