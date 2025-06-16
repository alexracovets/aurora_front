import type { CollectionConfig } from 'payload';

export const Partners: CollectionConfig = {
    slug: 'partners',
    labels: {
        singular: 'Партнер',
        plural: 'Партнери',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: "upload",
            type: "upload",
            relationTo: "media",
            required: true,
        }
    ],
}
