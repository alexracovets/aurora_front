"use client";

import Link from "next/link";
import Headroom from "react-headroom";

import { Container, Logo } from "@atoms";
import { HeaderNavigation } from "@molecules";
import { useNavigationStore } from "@store";
import { cn } from "@utils";

export const Header = () => {
    const { navigation } = useNavigationStore();

    return (
        <Headroom>
            <header className={cn(
                "shadow-md bg-white",
                "translate-y-[-100%] transition-all duration-300",
                navigation.length > 0 && "translate-y-0"
            )}>
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