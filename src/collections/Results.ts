import type { CollectionConfig } from 'payload'

export const Results: CollectionConfig = {
    slug: 'results',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: "description",
            type: "text",
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


    ],
}
