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
