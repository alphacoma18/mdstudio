if (!self.define) {
	let e,
		s = {};
	const a = (a, n) => (
		(a = new URL(a + ".js", n).href),
		s[a] ||
			new Promise((s) => {
				if ("document" in self) {
					const e = document.createElement("script");
					(e.src = a), (e.onload = s), document.head.appendChild(e);
				} else (e = a), importScripts(a), s();
			}).then(() => {
				let e = s[a];
				if (!e) throw new Error(`Module ${a} didn’t register its module`);
				return e;
			})
	);
	self.define = (n, c) => {
		const o =
			e ||
			("document" in self ? document.currentScript.src : "") ||
			location.href;
		if (s[o]) return;
		let i = {};
		const r = (e) => a(e, o),
			t = { module: { uri: o }, exports: i, require: r };
		s[o] = Promise.all(n.map((e) => t[e] || r(e))).then((e) => (c(...e), i));
	};
}
define(["./workbox-588899ac"], function (e) {
	"use strict";
	importScripts("fallback-KoKFPnNaaVWrbMARdjjyV.js"),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: "/_next/static/KoKFPnNaaVWrbMARdjjyV/_buildManifest.js",
					revision: "e9959f53209bdbb6afb5ab1b1b600621",
				},
				{
					url: "/_next/static/KoKFPnNaaVWrbMARdjjyV/_ssgManifest.js",
					revision: "b6652df95db52feb4daf4eca35380933",
				},
				{
					url: "/_next/static/chunks/123.b62d223d475478ab.js",
					revision: "b62d223d475478ab",
				},
				{
					url: "/_next/static/chunks/170.e55f418c5c6fab77.js",
					revision: "e55f418c5c6fab77",
				},
				{
					url: "/_next/static/chunks/42.eb17e422ea567d74.js",
					revision: "eb17e422ea567d74",
				},
				{
					url: "/_next/static/chunks/472.961d35357f70b1b2.js",
					revision: "961d35357f70b1b2",
				},
				{
					url: "/_next/static/chunks/526.763b3764ffa98a7f.js",
					revision: "763b3764ffa98a7f",
				},
				{
					url: "/_next/static/chunks/562.fe86cd1bb014eb66.js",
					revision: "fe86cd1bb014eb66",
				},
				{
					url: "/_next/static/chunks/584.3e24a8bfb8de37b0.js",
					revision: "3e24a8bfb8de37b0",
				},
				{
					url: "/_next/static/chunks/607.35d0944f44bb3f4a.js",
					revision: "35d0944f44bb3f4a",
				},
				{
					url: "/_next/static/chunks/664-490830c05ded00aa.js",
					revision: "490830c05ded00aa",
				},
				{
					url: "/_next/static/chunks/675-1eac875c5cfbe5d0.js",
					revision: "1eac875c5cfbe5d0",
				},
				{
					url: "/_next/static/chunks/825.4e9c3167118d71db.js",
					revision: "4e9c3167118d71db",
				},
				{
					url: "/_next/static/chunks/876.e716e902f9b3cb2b.js",
					revision: "e716e902f9b3cb2b",
				},
				{
					url: "/_next/static/chunks/878.ed047bc0f9e6172e.js",
					revision: "ed047bc0f9e6172e",
				},
				{
					url: "/_next/static/chunks/985.9c80e15d38c42d63.js",
					revision: "9c80e15d38c42d63",
				},
				{
					url: "/_next/static/chunks/f65a48b9.ace71be8ca09f6ea.js",
					revision: "ace71be8ca09f6ea",
				},
				{
					url: "/_next/static/chunks/framework-7751730b10fa0f74.js",
					revision: "7751730b10fa0f74",
				},
				{
					url: "/_next/static/chunks/main-8d0b8be56a98af9a.js",
					revision: "8d0b8be56a98af9a",
				},
				{
					url: "/_next/static/chunks/pages/404-363add7031eb246d.js",
					revision: "363add7031eb246d",
				},
				{
					url: "/_next/static/chunks/pages/500-65b32b01f083d5a5.js",
					revision: "65b32b01f083d5a5",
				},
				{
					url: "/_next/static/chunks/pages/_app-247d9ca7a2ecb51d.js",
					revision: "247d9ca7a2ecb51d",
				},
				{
					url: "/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",
					revision: "e4f561a102d9bb14",
				},
				{
					url: "/_next/static/chunks/pages/_offline-dd78c48908e3bcd5.js",
					revision: "dd78c48908e3bcd5",
				},
				{
					url: "/_next/static/chunks/pages/auth/signin-59c32d8f26fd2e58.js",
					revision: "59c32d8f26fd2e58",
				},
				{
					url: "/_next/static/chunks/pages/auth/signout-8fb510715bbc60dc.js",
					revision: "8fb510715bbc60dc",
				},
				{
					url: "/_next/static/chunks/pages/editor-cd366963e333e441.js",
					revision: "cd366963e333e441",
				},
				{
					url: "/_next/static/chunks/pages/index-c68910420ba4370d.js",
					revision: "c68910420ba4370d",
				},
				{
					url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
					revision: "837c0df77fd5009c9e46d446188ecfd0",
				},
				{
					url: "/_next/static/chunks/webpack-f148f2646d8e9104.js",
					revision: "f148f2646d8e9104",
				},
				{
					url: "/_next/static/css/026181fbd375b86c.css",
					revision: "026181fbd375b86c",
				},
				{
					url: "/_next/static/css/05d9d912afe8bc0d.css",
					revision: "05d9d912afe8bc0d",
				},
				{
					url: "/_next/static/css/1255917b5d423ca0.css",
					revision: "1255917b5d423ca0",
				},
				{
					url: "/_next/static/css/1385edeee515a56e.css",
					revision: "1385edeee515a56e",
				},
				{
					url: "/_next/static/css/3e7253deb11117f3.css",
					revision: "3e7253deb11117f3",
				},
				{
					url: "/_next/static/css/590148f13f7e97fa.css",
					revision: "590148f13f7e97fa",
				},
				{
					url: "/_next/static/css/631f1a902985fc03.css",
					revision: "631f1a902985fc03",
				},
				{
					url: "/_next/static/css/8b9007900d87b297.css",
					revision: "8b9007900d87b297",
				},
				{
					url: "/_next/static/css/9186e5a768eb6c16.css",
					revision: "9186e5a768eb6c16",
				},
				{
					url: "/_next/static/css/b0dcd6ec4ffc99ce.css",
					revision: "b0dcd6ec4ffc99ce",
				},
				{
					url: "/_next/static/css/bd42cda49cdacb67.css",
					revision: "bd42cda49cdacb67",
				},
				{
					url: "/_next/static/css/c2d55f09e548aa0a.css",
					revision: "c2d55f09e548aa0a",
				},
				{
					url: "/_next/static/css/ef4d87d4740da811.css",
					revision: "ef4d87d4740da811",
				},
				{
					url: "/_next/static/media/fontello.559ea316.svg",
					revision: "559ea316",
				},
				{
					url: "/_next/static/media/fontello.6b266282.eot",
					revision: "6b266282",
				},
				{
					url: "/_next/static/media/fontello.86304608.woff2",
					revision: "86304608",
				},
				{
					url: "/_next/static/media/fontello.d12e45bf.ttf",
					revision: "d12e45bf",
				},
				{
					url: "/_next/static/media/fontello.e49db35b.woff",
					revision: "e49db35b",
				},
				{ url: "/_offline", revision: "KoKFPnNaaVWrbMARdjjyV" },
				{
					url: "/android-chrome-144x144.png",
					revision: "b93349a3dd0543819978a3790b39e5f7",
				},
				{
					url: "/android-chrome-192x192.png",
					revision: "323fa7c2e9aab0d1eff8fb2d551f4d6f",
				},
				{
					url: "/android-chrome-256x256.png",
					revision: "ba97ea0f31a9daebf544bb9093997229",
				},
				{
					url: "/android-chrome-36x36.png",
					revision: "ba85652c9db2e498379c70e31434ebd4",
				},
				{
					url: "/android-chrome-384x384.png",
					revision: "c0ad0ea1cbf87b2c8cfd5c2337d5999a",
				},
				{
					url: "/android-chrome-48x48.png",
					revision: "323cc1d654dcbab55c0bcc7ceb87880a",
				},
				{
					url: "/android-chrome-512x512.png",
					revision: "d7f60078068b2611b982a1ab27ff613d",
				},
				{
					url: "/android-chrome-72x72.png",
					revision: "40731b80a63802369bce7946800fc67c",
				},
				{
					url: "/android-chrome-96x96.png",
					revision: "cade0803eff0da2145138bfa942bc213",
				},
				{
					url: "/apple-touch-icon-114x114-precomposed.png",
					revision: "bfca6f3b361bd9565313520ef1d06a46",
				},
				{
					url: "/apple-touch-icon-114x114.png",
					revision: "76bdd535f750726920e12f9569f08038",
				},
				{
					url: "/apple-touch-icon-120x120-precomposed.png",
					revision: "4ed9e40455e33758c41ee41c75d321ba",
				},
				{
					url: "/apple-touch-icon-120x120.png",
					revision: "16394940f72b5ca3ab16d2ad93f851a6",
				},
				{
					url: "/apple-touch-icon-144x144-precomposed.png",
					revision: "56ce7550dc4e25a80688868e02b4279c",
				},
				{
					url: "/apple-touch-icon-144x144.png",
					revision: "232c85a86286065d6ae9497294be38a7",
				},
				{
					url: "/apple-touch-icon-152x152-precomposed.png",
					revision: "0c28ee2ce6cb6b1c94c0aa1b004a40fa",
				},
				{
					url: "/apple-touch-icon-152x152.png",
					revision: "12187a4811859265dbadb551224472d9",
				},
				{
					url: "/apple-touch-icon-180x180-precomposed.png",
					revision: "91ccea4ef3e72a52a87d531f6814c97f",
				},
				{
					url: "/apple-touch-icon-180x180.png",
					revision: "5fd8d5ef5730478bdc0f57b83ebe3e0f",
				},
				{
					url: "/apple-touch-icon-57x57-precomposed.png",
					revision: "4e51fca0b72957025eb581da3c5d9a50",
				},
				{
					url: "/apple-touch-icon-57x57.png",
					revision: "97335b6ede1fc26ae7d73338e7b9e5f3",
				},
				{
					url: "/apple-touch-icon-60x60-precomposed.png",
					revision: "dfd4efb2fec574fe4937aa68ff651f56",
				},
				{
					url: "/apple-touch-icon-60x60.png",
					revision: "465df1f53e9cdbeee549898ee02977ab",
				},
				{
					url: "/apple-touch-icon-72x72-precomposed.png",
					revision: "f54a7a047f871bde67f46655f174b922",
				},
				{
					url: "/apple-touch-icon-72x72.png",
					revision: "c4a5ecfa875e6ac74ed8d047524add93",
				},
				{
					url: "/apple-touch-icon-76x76-precomposed.png",
					revision: "bb6fb28c84cb845b2e25c5758e3e893e",
				},
				{
					url: "/apple-touch-icon-76x76.png",
					revision: "4dd9a6d8beff3bd22508832c0e89ec69",
				},
				{
					url: "/apple-touch-icon-precomposed.png",
					revision: "91ccea4ef3e72a52a87d531f6814c97f",
				},
				{
					url: "/apple-touch-icon.png",
					revision: "5fd8d5ef5730478bdc0f57b83ebe3e0f",
				},
				{
					url: "/browserconfig.xml",
					revision: "15a9c725229f052e0a75df7590d42e4e",
				},
				{
					url: "/favicon-16x16.png",
					revision: "0e377c9992b5c302eaaacc1339bb29ed",
				},
				{
					url: "/favicon-194x194.png",
					revision: "84dc0fe4466fc803e6f0a51860dbc95d",
				},
				{
					url: "/favicon-32x32.png",
					revision: "ae89e467086c6253fe367e5f907c7309",
				},
				{ url: "/favicon.ico", revision: "ffc7414499301ea9a7a22f114df039cd" },
				{
					url: "/fontello/fontello-76f6c27b/LICENSE.txt",
					revision: "805f23deac184eccd9ef5d040950e54a",
				},
				{
					url: "/fontello/fontello-76f6c27b/README.txt",
					revision: "dfef07fb3bbb3aa80565a587aca43e66",
				},
				{
					url: "/fontello/fontello-76f6c27b/config.json",
					revision: "705a2c29a0d77f81f45f59fb96519ae5",
				},
				{
					url: "/fontello/fontello-76f6c27b/css/animation.css",
					revision: "6444523a89b97674ba669ef5cfe826af",
				},
				{
					url: "/fontello/fontello-76f6c27b/css/fontello-codes.css",
					revision: "52a170c598d1577ec291a967d6061c6c",
				},
				{
					url: "/fontello/fontello-76f6c27b/css/fontello-embedded.css",
					revision: "4730b7a12325feb3c694e0bae852af6d",
				},
				{
					url: "/fontello/fontello-76f6c27b/css/fontello-ie7-codes.css",
					revision: "50fff55a354a9b6e90f737070698aee3",
				},
				{
					url: "/fontello/fontello-76f6c27b/css/fontello-ie7.css",
					revision: "de4826b4d6df2c89eaa4423635fa0afc",
				},
				{
					url: "/fontello/fontello-76f6c27b/css/fontello.css",
					revision: "dc5c8b719419995152586be46793aa07",
				},
				{
					url: "/fontello/fontello-76f6c27b/demo.html",
					revision: "7cde908760e9a479c0d0b511387fdc1e",
				},
				{
					url: "/fontello/fontello-76f6c27b/font/fontello.eot",
					revision: "d7365f4ebe438cc5d2ec0d921bae8c0e",
				},
				{
					url: "/fontello/fontello-76f6c27b/font/fontello.svg",
					revision: "1edba440670db12914083cf6665b5496",
				},
				{
					url: "/fontello/fontello-76f6c27b/font/fontello.ttf",
					revision: "faf9d1b4329161113c53ffd83260383a",
				},
				{
					url: "/fontello/fontello-76f6c27b/font/fontello.woff",
					revision: "abbb0590145abc22656b7f94b4dc9d4e",
				},
				{
					url: "/fontello/fontello-76f6c27b/font/fontello.woff2",
					revision: "7723b48d10de9e7af9af9e038d725d7d",
				},
				{ url: "/fonts/fallback.woff2", revision: "KoKFPnNaaVWrbMARdjjyV" },
				{
					url: "/logo/anymd_mobile_logo_dark.png",
					revision: "07dc33d9498f72bf7d3e71cc57594eed",
				},
				{
					url: "/logo/anymd_mobile_logo_dark_2.png",
					revision: "99f125f824af72fad5b4f16a902708bb",
				},
				{
					url: "/logo/anymd_mobile_logo_light.png",
					revision: "81b31fad0500159c3abcf12263af2b92",
				},
				{
					url: "/logo/anymd_mobile_logo_light_2.png",
					revision: "3aab9c900acd11a2ee0e2863ab4f5e7c",
				},
				{
					url: "/logo/anymd_pc_logo_dark.png",
					revision: "b084561efdb360b3bac7f34ec52b5a6a",
				},
				{
					url: "/logo/anymd_pc_logo_dark_2.png",
					revision: "663af57382c88ba4a2b3608f4037efb0",
				},
				{
					url: "/logo/anymd_pc_logo_light.png",
					revision: "eb103095a50864deeec46eabe9a8422f",
				},
				{
					url: "/logo/anymd_pc_logo_light_2.png",
					revision: "7eee0a3be05ef31159cebc5a027cb047",
				},
				{
					url: "/logo/mymd_pc_logo_light.png",
					revision: "07a4dbc6bc22d8899783141fef3a2c5b",
				},
				{
					url: "/logo/pc_logo_dark.png",
					revision: "35e4da24eccb2e0e9aff9f9eb7f69aef",
				},
				{
					url: "/manifest.webmanifest",
					revision: "194559e80c3198f01be27266e7928de4",
				},
				{
					url: "/mstile-144x144.png",
					revision: "9fc50aa73e9ddd53bd5f30df7df11573",
				},
				{
					url: "/mstile-150x150.png",
					revision: "88868dd666a4d606e32610b7a529f688",
				},
				{
					url: "/mstile-310x150.png",
					revision: "49e1d0bda4ad13e161d82acd6efac601",
				},
				{
					url: "/mstile-310x310.png",
					revision: "ce7781c04b27043a2e9af06f19a6d6f0",
				},
				{
					url: "/mstile-70x70.png",
					revision: "41fd1bbdf5e938d60ab5c150086a8669",
				},
				{
					url: "/safari-pinned-tab.svg",
					revision: "b9f2217f5dfaf7158bf0fedd507c3ba6",
				},
				{ url: "/vercel.svg", revision: "26bf2d0adaf1028a4d4c6ee77005e819" },
				{
					url: "/~partytown/debug/partytown-atomics.js",
					revision: "fd9e1ef82ae9a7f4f2b3bba5511a4e31",
				},
				{
					url: "/~partytown/debug/partytown-media.js",
					revision: "ab53127b79bdb215faabe0da2f2c453c",
				},
				{
					url: "/~partytown/debug/partytown-sandbox-sw.js",
					revision: "b7c70d73a8e4e0fbc4d41b8b01f90f17",
				},
				{
					url: "/~partytown/debug/partytown-sw.js",
					revision: "1b80777b2e54bd62fe698991013370e4",
				},
				{
					url: "/~partytown/debug/partytown-ww-atomics.js",
					revision: "b13ba0543d02057193994032f46ac755",
				},
				{
					url: "/~partytown/debug/partytown-ww-sw.js",
					revision: "2800108c504166f8a27412f04ae6837a",
				},
				{
					url: "/~partytown/debug/partytown.js",
					revision: "0e3d868945cdf10d6df0965476957614",
				},
				{
					url: "/~partytown/partytown-atomics.js",
					revision: "e514de95070a04bc1c225b9162911c93",
				},
				{
					url: "/~partytown/partytown-media.js",
					revision: "5d70e98640138b81c9c9671a481065d7",
				},
				{
					url: "/~partytown/partytown-sw.js",
					revision: "a8133ecfe5869139b499ac3c4223e739",
				},
				{
					url: "/~partytown/partytown.js",
					revision: "5ad64f23a6c5fb59d5590c52f525fa4f",
				},
			],
			{ ignoreURLParametersMatching: [] }
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			"/",
			new e.NetworkFirst({
				cacheName: "start-url",
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: s,
							event: a,
							state: n,
						}) =>
							s && "opaqueredirect" === s.type
								? new Response(s.body, {
										status: 200,
										statusText: "OK",
										headers: s.headers,
								  })
								: s,
					},
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: "google-fonts-webfonts",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: "google-fonts-stylesheets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-font-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-image-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-image",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: "static-audio-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: "static-video-assets",
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-js-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: "static-style-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: "next-data",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: "static-data-assets",
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				const s = e.pathname;
				return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
			},
			new e.NetworkFirst({
				cacheName: "apis",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				return !e.pathname.startsWith("/api/");
			},
			new e.NetworkFirst({
				cacheName: "others",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: "cross-origin",
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
					{ handlerDidError: async ({ request: e }) => self.fallback(e) },
				],
			}),
			"GET"
		);
});
