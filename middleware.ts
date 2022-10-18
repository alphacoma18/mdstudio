import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { GenerateCookies } from "./utils/gen/cookie";
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest) {
	try {
		const cookies = GenerateCookies([
			{
				name: "name",
				value: "value",
				expires: new Date("2021-01-01"),
			},
		]);

		// NextResponse.next().cookies.set("my-cookie", cookies);
		return;
		// NextResponse.json("Set-Cookie", cookies);
		// NextResponse.json({ message: "OK" });
	} catch (error) {
		console.error(error);
	}
}
