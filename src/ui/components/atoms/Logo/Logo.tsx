"use client";

import Image from "next/image";

export const Logo = () => {
    return (
        <div
            className="relative w-full max-w-[116px] h-[38px]"
        >
            <Image src="/images/webp/logo.webp" alt="Logo" fill />
        </div>
    )
}