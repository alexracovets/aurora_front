"use client";

import { useNavigationStore } from "@store";
import { useCheckPage } from "@hooks";
import { AtomLink } from "@atoms";
import { cn } from "@utils";

export const HeaderNavigation = () => {
    const activePage = useCheckPage();
    const { navigation } = useNavigationStore();

    return (
        <nav className="flex">
            <ul className="flex items-center gap-x-[4px]">
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