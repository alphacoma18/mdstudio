import { NextApiRequest, NextApiResponse } from "next";
import { GenerateCookies } from "../../../utils/gen/cookie";
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		return res
			.setHeader(
				"Set-Cookie",
				GenerateCookies([
					{
						name: "access_token",
						value: "",
						expires: new Date(0),
					},
				])
			)
			.send({ message: "Success" });
	} catch (err: any) {
		res.json({ err });
	}
}
