"use client";

import Link from "next/link";

import { cn } from "@utils";

export const FooterLinks = () => {

    const links = [
        {
            name: "Робота",
            link: "https://robota.avrora.ua/"
        },
        {
            name: "Наш інтернет магазин",
            link: "https://avrora.ua/"
        },
        {
            name: "Радіо Аврора",
            link: "https://avrora.ua/radio-avrora/"
        },
        {
            name: "Постачальникам товарів і послуг",
            link: "https://corporate.avrora.ua/for-partners/"
        },
        {
            name: "Адреси Магазинів",
            link: "https://avrora.ua/magazyny/"
        },
        {
            name: "Комплаєнс",
            link: "https://robota.avrora.ua/nasa-misiia"
        }
    ]

    return (
        <div className="p-[54px] pl-[108px] bg-light-pink rounded-[30px]">
            <ul className="flex flex-col gap-y-[16px] text-[20px] underline">
                {links.map((link) => (
                    <li
                        key={link.name}
                        className={cn(
                            "relative",
                            "before:content-[''] before:absolute before:left-0 before:top-1/2 before:translate-x-[-200%] before:-translate-y-1/2 before:w-[10px] before:h-[10px] before:bg-yellow before:rounded-full"
                        )}
                    >
                        <Link href={link.link}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}