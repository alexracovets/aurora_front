"use client"

import Image from "next/image";
import Link from "next/link";

const news = [
    {
        title: "Новая статья",
        data: "22.05.2025",
        description: "Описание новости",
        image: "/images/avrora.jpg",
        slug: "news-1"
    },
]

export const NewsBlock = () => {
    return (
        <div
            className="flex w-full flex-wrap gap-4"
        >
            {news.map((item, idx) => (
                <div
                    key={idx}
                    className="w-1/3 border-1 border-gray-300 rounded-md p-4"
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