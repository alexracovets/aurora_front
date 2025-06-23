"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const FooterSocials = () => {
    return (
        <div
            className="flex gap-[1.6rem]"
        >
            <Link href="https://www.instagram.com/avrora.robota/" target="_blank">
                <FaInstagram className="text-[3.6rem] text-yellow" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61558879978266" target="_blank">
                <FaFacebook className="text-[3.6rem] text-yellow" />
            </Link>
        </div>
    )
}