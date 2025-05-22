"use client"

import Image from "next/image";
import Link from "next/link";
import { NewsData } from "@data";

export const NewsBlock = () => {
    return (
        <div
            className="grid grid-cols-3 gap-4 w-full"
        >
            {NewsData.map((item, idx) => (
                <div
                    key={idx}
                    className="border-1 border-gray-300 rounded-md p-4"
                >
                    <div
                        className="w-full h-[200px] relative"
                    >
                        <Image src={item.image} alt={item.title} fill className="object-cover rounded-md" />
                    </div>
                    <div>
                        <p>{item.data}</p>
                    </div>
                    <h3>{item.title}</h3>
                    <Link href={`/news/${item.slug}`}>Далі</Link>
                </div>
            ))}
        </div>
    );
};