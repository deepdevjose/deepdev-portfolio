import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    // Image optimization configuration
    images: {
        formats: ['image/avif', 'image/webp'], // Modern formats for better compression
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 30, // Cache optimized images for 30 days
    },

    // Performance optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'] // Remove console.logs in production
        } : false,
    },

    // Experimental features for better performance
    experimental: {
        optimizePackageImports: ['framer-motion', 'lenis', '@paper-design/shaders-react'],
    },

    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        // Optimize bundle size
        if (process.env.NODE_ENV === 'production') {
            // Better tree shaking
            config.optimization = {
                ...config.optimization,
                usedExports: true,
                sideEffects: false,
            };
        }

        return config;
    },

};

export default nextConfig;
