"use client";

import { Container, Logo } from "@atoms";
import { HeaderNavigation } from "@molecules";
import Link from "next/link";

export const Header = () => {
    return (
        <header
            className="shadow-md"
        >
            <Container
                className="flex items-center gap-x-[32px] py-[10px]"
            >
                <Link href="/">
                    <Logo />
                </Link>
                <HeaderNavigation />
            </Container>
        </header>
    )
}