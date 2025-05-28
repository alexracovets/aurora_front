"use client";

import { Container, Logo } from "@atoms";
import { HeaderNavigation } from "@molecules";
import Link from "next/link";

export const Header = () => {
    return (
        <header
            className="shadow-md bg-white"
        >
            <Container
                className="flex items-center gap-x-[16px] py-[12px]"
            >
                <Link href="/">
                    <Logo />
                </Link>
                <HeaderNavigation />
            </Container>
        </header>
    )
}