import type { CollectionConfig } from 'payload'

export const Missions: CollectionConfig = {
    slug: 'missions',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'photo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'content',
            type: 'group',
            fields: [
                {
                    name: 'text',
                    type: 'richText',
                }
            ]
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'order',
            type: 'number',
            admin: {
                position: 'sidebar',
            },
        }
    ],
}
