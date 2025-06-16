import { getPayload } from "payload";
import config from "@/payload.config";

export const GalleryBlock = async () => {
    const payload = await getPayload({ config })

    const gallery = await payload.find({
        collection: 'gallery',
    })

    return (
        <>

        </>
    )
}