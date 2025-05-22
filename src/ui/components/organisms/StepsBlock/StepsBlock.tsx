"use client";

import { Step } from "@molecules";

import { StepsData } from "@data";

export const StepsBlock = () => {
    return (
        <div
            className="w-full flex flex-col"
        >
            {StepsData.map((item, index) => (
                <Step key={index} {...item} isSecondary={index % 2 !== 0} />
            ))}
        </div>
    )
}