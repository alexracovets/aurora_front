import { Block } from "payload";


export const Missions: Block = {
    slug: "missions",
    fields: [
        {
            name: "colums",
            type: "array",
            label: "Елементи",
            fields: [
                {
                    name: "width",
                    label: "Кількість колонок",
                    type: "select",
                    defaultValue: "1/1",
                    options: [
                        {
                            label: "1 колонка",
                            value: "1/1",
                        },
                        {
                            label: "2 колонки",
                            value: "1/2",
                        },
                    ],
                },
                {
                    name: "content",
                    type: "richText",
                    label: "Ціла колонка",
                    admin: {
                        condition: (data, siblingData) => siblingData?.width === "1/1"
                    }
                },
                {
                    name: "contentLeft",
                    type: "richText",
                    label: "Ліва колонка",
                    admin: {
                        condition: (data, siblingData) => siblingData?.width === "1/2",
                    }
                },
                {
                    name: "contentRight",
                    type: "richText",
                    label: "Права колонка",
                    admin: {
                        condition: (data, siblingData) => siblingData?.width === "1/2",
                    }
                }
            ]
        },
    ],
};