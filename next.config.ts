import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'robota.avrora.ua',
                port: '',
                pathname: '/storage/images/**',
            },
        ],
    },
};

export default withPayload(nextConfig);