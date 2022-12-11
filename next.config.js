/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
	dest: "public",
	disable: process.env.NODE_ENV === "development",
	register: true,
	scope: "/",
	sw: "service-worker.js",
	// cacheOnFrontEndNav: true,
	fallbacks: {
		document: "/_offline",
		image: "/android-chrome-512x512.png",
		font: "/fonts/fallback.woff2",
		audio: "",
		video: "",
	},
});

// @ts-ignore
module.exports = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"lh3.googleusercontent.com",
			"avatars.githubusercontent.com",
			"platform-lookaside.fbsbx.com",
			"media-exp1.licdn.com",
			"pbs.twimg.com",
		],
	},
});
