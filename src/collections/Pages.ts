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
    hooks: {
        afterChange: [
            async ({ doc, collection }) => {
                const webhookUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/revalidate`;
                
                try {
                    await fetch(webhookUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            collection: collection.slug,
                            slug: doc.slug || doc.id,
                        }),
                    });
                } catch (error) {
                    console.error('Помилка відправки webhook:', error);
                }
            },
        ],
    },
}
