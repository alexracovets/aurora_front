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
        create: () => false,
        delete: () => false,
        update: () => true,
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Назва сторінки',
            admin: {
                hidden: true,
            },
            access: {
                update: () => false,
            }
        },
        {
            name: 'slug',
            type: 'text',
            label: 'Slug',
            admin: {
                hidden: true,
            },
            access: {
                update: () => false,
            }
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
    ]
}
