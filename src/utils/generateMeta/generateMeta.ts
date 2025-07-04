import type { Metadata } from 'next'

import type { Page } from '@/payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'

export const generateMeta = async (args: { doc: Page }): Promise<Metadata> => {
    const { doc } = args || {}
    const ogImage =
        typeof doc?.meta?.image === 'object' &&
        doc.meta.image !== null &&
        'url' in doc.meta.image &&
        `${process.env.NEXT_PUBLIC_SERVER_URL}${doc.meta.image.url}`

    const title = doc?.meta?.title || 'Аврора';

    return {
        description: doc?.meta?.description,
        icons: {
            icon: '/favicon.png',
            shortcut: '/favicon.png',
            apple: '/favicon.png',
        },
        openGraph: mergeOpenGraph({
            description: doc?.meta?.description || '',
            images: ogImage
                ? [
                    {
                        url: ogImage,
                    },
                ]
                : undefined,
            title,
            url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
        }),
        title,
    }
}