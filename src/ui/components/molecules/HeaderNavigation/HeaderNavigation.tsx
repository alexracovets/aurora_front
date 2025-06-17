"use client";

import { AtomLink } from "@atoms";
import { useCheckPage } from "@hooks";
import { HeaderData } from "@data";
import { cn } from "@utils";

export const HeaderNavigation = () => {
    const activePage = useCheckPage();

    return (
        <nav className="flex">
            <ul className="flex items-center">
                {HeaderData.map((link, idx) => (
                    <li key={idx}>
                        <AtomLink key={idx} href={`/${link.slug}`} variant="navigation" className={cn(activePage === link.slug && "bg-bage")}>
                            {link.name}
                        </AtomLink>
                    </li>
                ))}
            </ul>
        </nav >
    )
}