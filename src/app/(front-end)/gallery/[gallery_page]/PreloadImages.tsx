"use client";

import { Gallery } from "@payload-types";

interface PreloadImagesProps {
    galleries: Gallery[];
}

export function PreloadImages({ galleries }: PreloadImagesProps) {
    return (
        <>
            {galleries.map((gallery) => {
                if (gallery.image && typeof gallery.image === 'object' && gallery.image.url) {
                    return (
                        <link
                            key={gallery.id}
                            rel="preload"
                            as="image"
                            href={gallery.image.url}
                        />
                    );
                }
                return null;
            })}
        </>
    );
} 