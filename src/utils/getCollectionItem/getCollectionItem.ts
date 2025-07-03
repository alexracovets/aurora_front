"use server";

import { CollectionSlug, getPayload } from "payload";
import config from "@/payload.config";

interface getCollectionItemProps {
    collection: CollectionSlug;
    slug: string;
}


export async function getCollectionItem({ collection, slug }: getCollectionItemProps) {
    const payload = await getPayload({ config });
    const item = await payload.find({
        collection: collection,
        where: { slug: { equals: slug } },
    });
    return item.docs[0];
}