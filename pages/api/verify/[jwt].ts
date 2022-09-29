import { NextApiRequest, NextApiResponse } from "next";
import DB_VERIFY from "../../../utils/db/verify";
import { verifyVerificationToken } from "../../../utils/jwt";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { jwt } = req.query;
		if (!jwt) throw "Error: Missing JWT";
		const { username, email } = verifyVerificationToken(jwt as string);
		if (!username || !email) throw "Error: Invalid JWT";
		const success = await DB_VERIFY.deleteOne({ username, email });
		if (!success) throw "Error: Unable to verify account";
		console.log(success);

		res.status(200).send("");
	} catch (err: any) {
		res.json({ err });
	}
}
