import { NextApiRequest, NextApiResponse } from "next";
import { verifyAccessToken } from "../../../utils/gen/jwt";
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { access_token } = req.cookies;
		if (!access_token) throw "Error: Missing Access Token";
		const { _id, username, files } = verifyAccessToken(access_token);
		res.json({ _id, username, files });
	} catch (err: any) {
		res.json({ err });
	}
}
