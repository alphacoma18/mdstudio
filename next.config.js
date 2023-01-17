/** @type {import('next').NextConfig} */
const { MongoClient } = require('mongodb');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
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
      'pbs.twimg.com'
    ]
  }
})

async function run() {
  try {
    const client = new MongoClient(process.env.MONGO_URI, {
		minPoolSize: 20,
		maxPoolSize: 400,
		appName: "AnyMD",
	});
  await client.connect();
		// if (process.env.NODE_ENV !== "production") return;
		// await connect(process.env.MONGO_URI ?? "", {
		// 	useNewUrlParser: true,
		// 	useUnifiedTopology: true,
		// 	minPoolSize: 20,
		// 	maxPoolSize: 400,
		// });
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error(error);
	}
}
void run();
