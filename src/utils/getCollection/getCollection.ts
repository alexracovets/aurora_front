"use server";

import { CollectionSlug, getPayload } from "payload";
import config from "@/payload.config";

export async function getCollection({ collection }: { collection: CollectionSlug }) {
    const payload = await getPayload({ config });
    const collectionData = await payload.find({
        collection: collection,
    });
    return collectionData.docs;
}