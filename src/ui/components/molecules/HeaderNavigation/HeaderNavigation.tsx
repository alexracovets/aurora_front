"use client";

import Link from "next/link";

const links = [
    {
        label: "Новини",
        href: "/"
    },
    {
        label: "Результати роботи",
        href: "/"
    },
    {
        label: "Відзнаки",
        href: "/"
    },
    {
        label: "Партнери",
        href: "/"
    },
    {
        label: "Фото",
        href: "/"
    },
    {
        label: "Правила",
        href: "/"
    },
    {
        label: "Увійти",
        href: "/"
    }
]

export const HeaderNavigation = () => {
    return (
        <nav className="flex flex-1 pt-[8px]">
            <ul className="flex items-center border-collapse border-[1px] rounded-full overflow-hidden">
                {links.map((link, idx) => (
                    <li key={idx}
                    className="border border-[1px] border-gray border-collapse first:rounded-l-full last:rounded-r-full"
                 
                   >
                        <Link
                            href={link.href}
                            className="block text-[16px] py-[8px] px-[16px]"
                 
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}