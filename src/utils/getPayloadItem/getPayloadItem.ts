"use server";

import { getPayload } from "payload";
import config from "@/payload.config";
import { CollectionSlug } from "payload";


export const getPayloadItem = async (collection: string, slug: string) => {
    const payload = await getPayload({ config });
    const item = await payload.find({
        collection: collection as CollectionSlug,
        where: {
            slug: { equals: slug }
        }
    });
    return item.docs[0] || null;
};
