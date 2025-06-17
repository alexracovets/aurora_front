import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
    slug: 'header',
    label: 'Навігація',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'page',
            label: 'Сторінки:',
            type: 'relationship',
            relationTo: 'pages',
            hasMany: true,
        },
    ],
}
