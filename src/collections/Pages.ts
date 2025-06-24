import { Missions } from '@/blocks';
import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { ParagraphFeature, BoldFeature } from '@payloadcms/richtext-lexical';


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
        },
        {
            name: 'title',
            type: 'text',
        },
        Missions,
        {
            name: 'content',
            type: 'richText',
            editor: lexicalEditor({
                features: [
                    ParagraphFeature(),
                    BoldFeature()
                ]
            })
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
