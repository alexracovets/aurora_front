"use client";

import { Step } from "@molecules";

import { ExampleStepsData as data } from "@data";

export const ExampleSteps = () => {
    return (
        <div
            className="w-full flex flex-col"
        >
            {data.map((item, index) => (
                <Step key={index} {...item} isSecondary={index % 2 !== 0} />
            ))}
        </div>
    )
}