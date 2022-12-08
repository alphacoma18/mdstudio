/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
	dest: "public",
	disable: process.env.NODE_ENV === "development",
	register: true,
	scope: "/",
	sw: "service-worker.js",
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
