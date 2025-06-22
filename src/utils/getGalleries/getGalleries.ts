"use server";

import { getPayload } from "payload";
import config from "@/payload.config";
import { Gallery } from "@payload-types";

export async function getGalleries(): Promise<Gallery[]> {
    try {
        const payload = await getPayload({
            config: config,
        });

        const galleries = await payload.find({
            collection: "gallery",
            sort: "-id",
        });

        return galleries.docs;
    } catch (error) {
        console.error(error);
        return [];
    }
}