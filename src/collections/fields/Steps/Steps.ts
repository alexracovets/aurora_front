import { Field } from "payload";
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { ParagraphFeature, BoldFeature, ItalicFeature, StrikethroughFeature, UnderlineFeature, UnorderedListFeature, FixedToolbarFeature, HeadingFeature, UploadFeature, HorizontalRuleFeature } from '@payloadcms/richtext-lexical';

export const Steps: Field = {
    name: "steps",
    type: "array",
    label: "Кроки",
    admin: {
        condition: (_, siblingData) => siblingData?.slug === ''
    },
    labels: {
        singular: "Крок",
        plural: "Кроки",
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
                    HeadingFeature({ enabledHeadingSizes: ["h2", "h3"] }),
                    ParagraphFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                    StrikethroughFeature(),
                    UnderlineFeature(),
                    UnorderedListFeature(),
                    FixedToolbarFeature(),
                    UploadFeature(),
                    HorizontalRuleFeature()
                ]
            }),
            admin: {
                condition: (_, siblingData) => siblingData?.width === "1/1"
            },
            validate: (value) => {
                if (value && Array.isArray(value)) {
                    const headings = value.filter(node => node.type === 'heading');
                    if (headings.length > 1) {
                        return 'Можна додати тільки один заголовок';
                    }
                }
                return true;
            }
        },
        {
            name: "contentLeft",
            type: "richText",
            label: "Ліва колонка",
            editor: lexicalEditor({
                features: [
                    HeadingFeature({ enabledHeadingSizes: ["h2", "h3"] }),
                    ParagraphFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                    StrikethroughFeature(),
                    UnderlineFeature(),
                    UnorderedListFeature(),
                    FixedToolbarFeature(),
                    UploadFeature(),
                    HorizontalRuleFeature()
                ]
            }),
            admin: {
                condition: (_, siblingData) => siblingData?.width === "1/2",
            }
        },
        {
            name: "contentRight",
            type: "richText",
            label: "Права колонка",
            editor: lexicalEditor({
                features: [
                    HeadingFeature({ enabledHeadingSizes: ["h2", "h3"] }),
                    ParagraphFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                    StrikethroughFeature(),
                    UnderlineFeature(),
                    UnorderedListFeature(),
                    FixedToolbarFeature(),
                    UploadFeature(),
                    HorizontalRuleFeature()
                ]
            }),
            admin: {
                condition: (_, siblingData) => siblingData?.width === "1/2",
            }
        }
    ]
};