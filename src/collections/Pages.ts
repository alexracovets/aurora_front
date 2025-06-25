import { Steps } from './fields';
import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import {
    ParagraphFeature,
    BoldFeature,
    ItalicFeature,
    StrikethroughFeature,
    UnderlineFeature,
    FixedToolbarFeature
} from '@payloadcms/richtext-lexical';

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
