"use client";

import Image from "next/image";

export const Logo = () => {
    return (
        <div
            className="relative w-full max-w-[115px] min-w-[115px] h-[40px] mx-[16px]"
        >
            <Image src="/images/webp/logo.webp" alt="Logo" fill />
        </div>
    )
}