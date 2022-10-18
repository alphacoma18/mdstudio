import { NextApiRequest, NextApiResponse } from "next";
import DB_ACCOUNT, { FileSchema } from "../../../utils/db/account";
import { verifyAccessToken } from "../../../utils/gen/jwt";
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { access_token } = req.cookies;
		if (!access_token) throw "Error: Missing Access Token";
		const { _id, username } = verifyAccessToken(access_token);
		const account: FileSchema | null = await DB_ACCOUNT.findOne(
			{ _id, username },
			{ files: 1 }
		);
		res.json({ _id, username, files: account?.files });
	} catch (err: any) {
		res.json({ err });
	}
}
