import { NextApiRequest, NextApiResponse } from "next";
import DB_ACCOUNT, { AccountSchema } from "../../../utils/db/account";
import { GenerateCookies } from "../../../utils/gen/cookie";
import { unHash } from "../../../utils/gen/hash";
import { generateAccessToken } from "../../../utils/gen/jwt";
interface Body {
	credential: string;
	password: string;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { credential, password }: Body = req.body;
		if (!credential || !password) throw "Error: Missing Credentials";
		const response: AccountSchema | null = await DB_ACCOUNT.findOne({
			$or: [{ username: credential }, { email: credential }],
		});
		if (!response) throw "Error: Account does not exist";
		const { _id, username, password: hashed_password } = response;
		const unHashed = await unHash(password, hashed_password);
		if (!unHashed) throw "Error: Incorrect Password";
		const accessToken = generateAccessToken({ _id, username });
		return res
			.setHeader(
				"Set-Cookie",
				GenerateCookies([
					{
						name: "access_token",
						value: accessToken,
						expires: new Date(Date.now() + 60 * 1000 * 15),
					},
				])
			)
			.send("");
	} catch (err: any) {
		res.json({ err });
	}
}
