import { Mision } from '@/blocks/Mision'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
    slug: 'pages',
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
            label: "Mision",
            admin: {
                condition: (data: { slug?: string }) => data.slug === '/'
            },
            blocks: [
                Mision
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
