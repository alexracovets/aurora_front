"use client";

import Image from "next/image";
import { AtomText } from "../../atoms";

const items = [
    {
        id: 1,
        src: "/images/aurora.jpg",
        alt: "gallery",
        description: [
            "Видача гуманітарної допомоги, лютий 2025.",
            "Набори для малюків у Харкові"
        ],
    },
    {
        id: 2,
        src: "/images/aurora.jpg",
        alt: "gallery",
        description: [
            "Видача гуманітарної допомоги, лютий 2025.",
            "Набори для малюків у Харкові"
        ],
    },
    {
        id: 3,
        src: "/images/aurora.jpg",
        alt: "gallery",
        description: [
            "Видача гуманітарної допомоги, лютий 2025.",
            "Набори для малюків у Харкові"
        ],
    },
    {
        id: 4,
        src: "/images/aurora.jpg",
        alt: "gallery",
        description: [
            "Видача гуманітарної допомоги, лютий 2025.",
            "Набори для малюків у Харкові"
        ],
    },
    {
        id: 5,
        src: "/images/aurora.jpg",
        alt: "gallery",
        description: [
            "Видача гуманітарної допомоги, лютий 2025.",
            "Набори для малюків у Харкові"
        ],
    },

]

export const GalleryBlock = () => {


    return (
        <div className="grid grid-cols-3 gap-[20px]">
            {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-[10px]">
                    <div className="relative w-[573px] h-[310px] rounded-[20px] overflow-hidden">
                        <Image src={item.src} alt={item.alt} fill />
                    </div>
                    <AtomText variant="galleryTitle">
                        {item.description.map((item, index) => (
                            <span key={index} className="block">{item}</span>
                        ))}
                    </AtomText>
                </div>
            ))}
        </div>
    )
}