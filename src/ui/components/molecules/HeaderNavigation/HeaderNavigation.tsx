"use client";

import { AtomLink } from "@atoms";

import { HeaderData } from "@data";

export const HeaderNavigation = () => {
    return (
        <nav className="flex">
            <ul className="flex items-center">
                {HeaderData.map((link, idx) => (
                    <li key={idx}>
                        <AtomLink key={idx} href={`/${link.slug}`} variant="navigation">
                            {link.name}
                        </AtomLink>
                    </li>
                ))}
            </ul>
        </nav >
    )
}