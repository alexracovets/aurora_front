"use client";

import { Login } from "@molecules";
import { AtomLink } from "@atoms";

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
        <div className="flex justify-between items-start p-[54px] pl-[108px] bg-light-pink rounded-[30px] gap-x-[40px]">
            <ul className="flex flex-col gap-y-[8px] underline">
                {links.map((link) => (
                    <li
                        key={link.name}
                    >
                        <AtomLink
                            href={link.link}
                            variant="footerLink"
                        >
                            {link.name}
                        </AtomLink>
                    </li>
                ))}
            </ul>
            <Login />
        </div>
    )
}