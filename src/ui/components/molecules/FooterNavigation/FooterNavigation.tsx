"use client";

import { AtomLink } from "@atoms";

import { useNavigationStore } from "@store";

export const FooterNavigation = () => {
    const { navigation } = useNavigationStore();
    
    return (
        <ul className="flex flex-col gap-y-[16px]">
            {navigation.map((item) => (
                <li key={item.id}>
                    <AtomLink
                        href={item.slug || ""}
                        variant="footerNavigation"
                    >
                        {item.name}
                    </AtomLink>
                </li>
            ))}
        </ul>
    );
};