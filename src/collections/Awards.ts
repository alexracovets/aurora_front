import type { CollectionConfig } from 'payload'

export const Awards: CollectionConfig = {
    slug: 'awards',
    labels: {
        singular: 'Відзнака',
        plural: 'Відзнаки',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Заголовок',
        },
        {
            name: "description",
            type: "text",
            label: 'Короткий опис',
        },
        {
            name: 'content',
            type: 'richText',
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
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