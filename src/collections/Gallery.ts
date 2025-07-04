import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
    slug: 'gallery',
    labels: {
        singular: 'Галерея',
        plural: 'Галерея',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "image",
            type: "upload",
            relationTo: "media",
        },
        {
            name: 'alt',
            type: 'text',
        },
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'slug',
            type: 'text',
            unique: true,
            admin: {
                position: 'sidebar',
            },
        },
    ],
}
