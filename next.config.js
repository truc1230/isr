/* eslint-disable import/no-extraneous-dependencies,import/no-unresolved */
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const { parsed: env } = require('dotenv')
    .config();
const path = require('path');

const {

    NEXT_PUBLIC_API_URL,
    NODE_ENV,
    ANALYZE,
    BUILD_NUMBER,
} = process.env;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: ANALYZE === 'true',
});



const basePath = '';

const { i18n } = require('./next-i18next.config');

const moduleExports = withPlugins([
        [withBundleAnalyzer],
        [withFonts],
    ],
    {
        async headers() {
            return [
                {
                    source: '/.well-known/apple-app-site-association',
                    headers: [
                        {
                            key: 'Content-Type',
                            value: 'application/json; charset=utf-8',
                        },
                    ],
                },
                {
                    source: '/.well-known/assetlinks.json',
                    headers: [
                        {
                            key: 'Content-Type',
                            value: 'application/json; charset=utf-8',
                        },
                    ],
                },
            ];
        },
        eslint: {
            // Warning: This allows production builds to successfully complete even if
            // your project has ESLint errors.
            ignoreDuringBuilds: true,
        },
        env: {
            // Make the COMMIT_SHA available to the client so that Sentry events can be
            // marked for the release they belong to. It may be undefined if running
            // outside of Vercel
        },
        i18n,
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
        images: {
            domains: [
                'test.nami.exchange',
                'static.namifutures.com',
                'sgp1.digitaloceanspaces.com',
                'nami.io',
                'datav2.nami.exchange',
            ],
        },
        distDir: process.env.BUILD_DIR || 'build',
    });

