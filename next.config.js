/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const nextDataIndex = runtimeCaching.findIndex(
  (entry) => entry.options.cacheName === "next-data"
);

if (nextDataIndex !== -1) {
  runtimeCaching[nextDataIndex].handler = "NetworkFirst";
} else {
  throw new Error("Failed to find next-data object in runtime caching");
}

const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable: true,
  // disable: process.env.NODE_ENV === 'development',
  skipWaiting: true,
  scope: '/',
  sw: 'service-worker.js',
  // cacheOnFrontEndNav: true,
  fallbacks: {
    document: '/_offline',
    image: '/android-chrome-512x512.png',
    font: '/fonts/fallback.woff2',
    audio: '',
    video: ''
  }
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'platform-lookaside.fbsbx.com',
      'media-exp1.licdn.com',
      'pbs.twimg.com',
      'media.licdn.com',
    ]
  }
})
