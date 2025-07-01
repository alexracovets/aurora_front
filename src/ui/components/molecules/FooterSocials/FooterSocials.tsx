"use client";

import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { AtomLink } from "@atoms";

export const FooterSocials = () => {
    return (
        <div className="flex gap-[1.6rem]">
            <AtomLink variant="footerSocial" href="https://www.instagram.com/avrora.robota/" target="_blank">
                <SlSocialInstagram />
            </AtomLink>
            <AtomLink variant="footerSocial" href="https://www.facebook.com/profile.php?id=61558879978266" target="_blank">
                <SlSocialFacebook />
            </AtomLink>
        </div>
    )
}