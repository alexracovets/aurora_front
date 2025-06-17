"use client";

import { AtomLink } from "@atoms";
import { useCheckPage } from "@hooks";
import { cn } from "@utils";
import { useNavigationStore } from "@store";

export const HeaderNavigation = () => {
    const activePage = useCheckPage();
    const { navigation } = useNavigationStore();

    return (
        <nav className="flex">
            <ul className="flex items-center">
                {navigation.map((nav, idx) => (
                    <li key={idx}>
                        <AtomLink key={idx} href={`/${nav.slug}`} variant="navigation" className={cn(activePage === nav.slug && "bg-bage")}>
                            {nav.name}
                        </AtomLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};