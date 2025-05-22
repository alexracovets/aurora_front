"use client";

import { Step } from "@molecules";

const steps = [
    {
        title: "Місія 1",
        image: "/images/avrora.jpg",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
        ],
        link: "/mission",
    },
    {
        title: "Роль 2",
        image: "/images/avrora.jpg",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
        ],
        link: "/role",
    },
    {
        title: "Задача 3",
        image: "/images/avrora.jpg",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
        ],
        link: "/task",
    },
    {
        title: "Приклад 4",
        image: "/images/avrora.jpg",
        description: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odit delectus. Sit vitae dolor dolorem beatae quo qui dolores impedit quasi ex? Nesciunt nemo quis dignissimos magnam rerum obcaecati enim.",
        ],
        link: "/example",
    },
]

export const ExampleSteps = () => {
    return (
        <div
            className="w-full flex flex-col"
        >
            {steps.map((step, index) => (
                <Step key={index} {...step} isSecondary={index % 2 !== 0} />
            ))}
        </div>
    )
}