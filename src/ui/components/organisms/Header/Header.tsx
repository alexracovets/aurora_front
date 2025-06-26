"use client";

import Link from "next/link";

import { Container, Logo } from "@atoms";
import { HeaderNavigation, Login } from "@molecules";
import { useNavigationStore } from "@store";
import { cn } from "@utils";

export const Header = () => {
    const { navigation } = useNavigationStore();

    return (
        <header className={cn(
            "absolute top-0 left-0 w-full shadow-md bg-white z-10",
            "translate-y-[-100%] transition-all duration-300",
            navigation.length > 0 && "translate-y-0"
        )}>
            <Container className="grid grid-cols-[auto_1fr_auto] items-center gap-x-[16px] py-[12px]">
                <Link href="/">
                    <Logo />
                </Link>
                <HeaderNavigation />
                <Login />
            </Container>
        </header>
    )
}; 