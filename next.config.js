/** @type {import('next').NextConfig} */

const removeImports = require("next-remove-imports")();

// @ts-ignore
module.exports = removeImports({
	reactStrictMode: true,
	swcMinify: true,
});
// const nextConfig = {
// };

// module.exports = nextConfig;
