import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // output: 'export',
    images: {
        unoptimized: true, // useful when doing `next export` (static)
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'miro.medium.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn-images-1.medium.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn-images-2.medium.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
