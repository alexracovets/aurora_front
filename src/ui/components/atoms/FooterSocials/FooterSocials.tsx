"use client";

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { AtomLink } from "@atoms";

export const FooterSocials = () => {
    return (
        <div className="flex gap-[1.6rem]">
            <AtomLink variant="social" href="https://www.instagram.com/avrora.robota/" target="_blank">
                <FaInstagram />
            </AtomLink>
            <AtomLink variant="social" href="https://www.facebook.com/profile.php?id=61558879978266" target="_blank">
                <FaFacebook />
            </AtomLink>
        </div>
    )
}