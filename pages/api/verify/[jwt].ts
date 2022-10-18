import { NextApiRequest, NextApiResponse } from "next";
import DB_ACCOUNT, { AccountSchema } from "../../../utils/db/account";
import DB_VERIFY from "../../../utils/db/verify";
import { verifyVerificationToken } from "../../../utils/gen/jwt";
import MailerHTMLVerifyComplete from "./html";
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { jwt } = req.query;
		if (!jwt) throw "Error: Missing JWT";
		const { username, email } = verifyVerificationToken(jwt as string);
		if (!username || !email) throw "Error: Invalid JWT";
		const success: AccountSchema | null = await DB_VERIFY.findOneAndDelete({
			username,
			email,
		});
		if (!success) throw "Error: Token does not exist";
		const account = await DB_ACCOUNT.create({
			_id: success._id,
			username: success.username,
			email: success.email,
			password: success.password,
			creation_date: success.creation_date,
			files: {},
		});
		if (!account) throw "Error: Unable to create account";
		const mailerHTML = await MailerHTMLVerifyComplete({ username });
		res.status(200).setHeader("Content-Type", "text/html").send(mailerHTML);
	} catch (err: any) {
		res.json({ err });
	}
}
