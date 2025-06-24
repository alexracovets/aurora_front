import { Field } from "payload";
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import {
    ParagraphFeature,
    BoldFeature,
    ItalicFeature,
    UnderlineFeature,
    LinkFeature,
    UnorderedListFeature
} from '@payloadcms/richtext-lexical';


export const Missions: Field = {
    name: "missions",
    type: "array",
    label: "Блок місій",
    labels: {
        singular: "Блок місій",
        plural: "елемент",
    },
    maxRows: 1,
    admin: {
        condition: (data, siblingData) => siblingData?.slug === '/'
    },
    fields: [
        {
            name: "colums",
            type: "array",
            label: "Елементи",
            labels: {
                singular: "Елемент",
                plural: "Елементи",
            },
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
                    editor: lexicalEditor({
                        features: [
                            BoldFeature(),
                            ItalicFeature(),
                            UnderlineFeature(),
                            LinkFeature(),
                            UnorderedListFeature(),
                            ParagraphFeature()
                        ]
                    }),
                    admin: {
                        condition: (data, siblingData) => siblingData?.width === "1/1"
                    }
                },
                {
                    name: "contentLeft",
                    type: "richText",
                    label: "Ліва колонка",
                    editor: lexicalEditor({
                        features: [
                            BoldFeature(),
                            ItalicFeature(),
                            UnderlineFeature(),
                            LinkFeature(),
                            UnorderedListFeature(),
                            ParagraphFeature()
                        ]
                    }),
                    admin: {
                        condition: (data, siblingData) => siblingData?.width === "1/2",
                    }
                },
                {
                    name: "contentRight",
                    type: "richText",
                    label: "Права колонка",
                    editor: lexicalEditor({
                        features: [
                            BoldFeature(),
                            ItalicFeature(),
                            UnderlineFeature(),
                            LinkFeature(),
                            UnorderedListFeature(),
                            ParagraphFeature()
                        ]
                    }),
                    admin: {
                        condition: (data, siblingData) => siblingData?.width === "1/2",
                    }
                }
            ]
        },
    ],
};