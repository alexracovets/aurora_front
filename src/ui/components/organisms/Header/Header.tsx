"use client";

import { Container, Logo } from "@atoms";
import { HeaderNavigation } from "@molecules";

export const Header = () => {
    return (
        <header>
            <Container
                className="flex items-center gap-x-[32px]"
            >
                <Logo />
                <HeaderNavigation />
            </Container>
        </header>
    )
}