"use server";

import { getPayload } from "payload";
import config from "@payload-config";

export const getNeighborGalleries = async (slug: string) => {
    const payload = await getPayload({ config })

    const page = await payload.find({
        collection: 'gallery',
        where: {
            slug: {
                equals: slug
            }
        },
        limit: 1,
    })

    const nextPage = await payload.find({
        collection: 'gallery',
        where: {
            id: {
                less_than: page.docs[0].id
            }
        },
        limit: 1,
        sort: '-id'
    })

    const prevPage = await payload.find({
        collection: 'gallery',
        where: {
            id: {
                greater_than: page.docs[0].id
            }
        },
        limit: 1,
        sort: 'id'
    })

    return {
        nextPage: nextPage.docs[0],
        prevPage: prevPage.docs[0]
    }
}