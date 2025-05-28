"use client";

import { StepType } from "@/types/StepType/StepType";
import { Step } from "@molecules";
import { useEffect, useState } from "react";


export const StepsBlock = () => {

    const [data, setData] = useState<StepType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/missions");
            const data = await res.json();
            setData(data.docs);
        };

        fetchData();
    }, []);

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