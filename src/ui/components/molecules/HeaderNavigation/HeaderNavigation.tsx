"use client";

import Link from "next/link";
import { HeaderData } from "@data";

export const HeaderNavigation = () => {
    return (
        <nav className="flex">
            <ul className="flex items-center border-collapse border-[1px] rounded-[8px] overflow-hidden">
                {HeaderData.map((link, idx) => (
                    <li key={idx}
                        className="border border-[1px] border-gray border-collapse first:rounded-l-[8px] last:rounded-r-[8px]"
                    >
                        <Link
                            href={`/${link.slug}`}
                            className="block text-[16px] py-[8px] px-[16px]"

                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}