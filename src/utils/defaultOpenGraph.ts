import type { Metadata } from 'next'

const defaultOpenGraph: Metadata["openGraph"] = {
    type: 'website',
    title: 'Blank Title',
    description: 'Blank Description',
    siteName: 'Blank Payload',
    images: [
        {
            url: '/images/default-image.jpg',
            width: 1200,
            height: 630,
        },
    ],
}

export const mergeOpenGraph = (og?: Metadata["openGraph"]): Metadata["openGraph"] => {
    return {
        ...defaultOpenGraph,
        ...og,
        images: og?.images ? og.images : defaultOpenGraph.images
    }
}
