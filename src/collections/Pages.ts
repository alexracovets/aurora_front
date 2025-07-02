import { Steps } from './fields';
import type { CollectionConfig } from 'payload';

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
            label: 'Назва сторінки',
        },
        {
            name: 'title',
            type: 'text',
            label: 'Титульний заголовок',
        },
        {
            name: 'content',
            type: 'richText',
            label: 'Контент',
        },
        Steps,
        {
            name: 'slug',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
    ],
}
