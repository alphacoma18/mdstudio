/** @type {import('next').NextConfig} */
const nextConfig = {
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
};
module.exports = nextConfig;
