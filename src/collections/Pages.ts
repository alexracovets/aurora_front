import { Missions } from '@/blocks/Missions'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Сторінка',
        plural: 'Сторінки',
    },
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'title',
            type: 'text',
        },
        {
            name: "blocks",
            type: "blocks",
            label: "Missions",
            admin: {
                condition: (data: { slug?: string }) => data.slug === '/'
            },
            blocks: [
                Missions
            ],
        },
        {
            name: 'content',
            type: 'richText',
        },
        {
            name: 'slug',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },


    ],
}
