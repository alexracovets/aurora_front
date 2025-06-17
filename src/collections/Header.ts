import type { CollectionConfig } from 'payload'

export const Header: CollectionConfig = {
    slug: 'header',
    labels: {
        singular: 'Header',
        plural: 'Header',
    },
    fields: [
        {
            name: 'page',
            type: 'relationship',
            relationTo: 'pages',
            hasMany: true,
        },
    ],
}
