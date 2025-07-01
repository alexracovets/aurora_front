import type { CollectionConfig } from 'payload'

export const Results: CollectionConfig = {
    slug: 'results',
    labels: {
        singular: 'Результат',
        plural: 'Результати',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Заголовок',
            required: true,
        },
        {
            name: "description",
            type: "text",
            label: 'Короткий опис',
        },
        {
            name: 'content',
            type: 'richText',
            required: false,
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'date',
            type: 'date',
            label: 'Дата створення',
            admin: {
                position: 'sidebar',
            },
        }
    ],
};