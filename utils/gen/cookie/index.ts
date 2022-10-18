import { CookieSerializeOptions, serialize } from "cookie";
function GenerateCookie(expires: Date): CookieSerializeOptions {
	return {
		httpOnly: true,
		secure: true,
		sameSite: "strict",
		path: "/",
		expires,
	};
}
interface Cookie {
	name: string;
	value: string;
	expires: Date;
}
export function GenerateCookies(cookies: Cookie[]) {
	return cookies
		.map((cookie) => {
			return serialize(
				cookie.name,
				cookie.value,
				GenerateCookie(cookie.expires)
			);
		})
		.join("; ");
}
