"use client";

import { Container, Logo } from "@atoms";
import { HeaderNavigation } from "@molecules";

export const Header = () => {
    return (
        <header
            className="shadow-md"
        >
            <Container
                className="flex items-center gap-x-[32px] py-[10px]"
            >
                <Logo />
                <HeaderNavigation />
            </Container>
        </header>
    )
}