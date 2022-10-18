import { NextApiRequest, NextApiResponse } from "next";
import DB_VERIFY from "../../../utils/db/verify";
import NewDate from "../../../utils/gen/date";
import { hash } from "../../../utils/gen/hash";
import { generateVerificationToken } from "../../../utils/gen/jwt";
import mailer from "../../../utils/mailer";
import MailerHTMLSignup from "./html";
export interface Body {
	username: string;
	email: string;
}
interface Password {
	password: string;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { username, email }: Body = req.body;
		let { password }: Password = req.body;
		password = await hash(password);
		if (!username || !email || !password)
			throw "Error: Missing Email or Password";
		const token = generateVerificationToken({ username, email });
		const url = `http://localhost:3000/api/verify/${token}`;
		const mailerHTML = await MailerHTMLSignup({ url });
		const mailerResponse = await mailer({
			recipient: email,
			subject: "MyMD Markdown Editor Verify",
			html: mailerHTML,
		});
		if (!mailerResponse) throw "Error: Unable to send email";
		await DB_VERIFY.create({
			username,
			email,
			password,
			creation_date: NewDate(),
		});
		res.status(200).send("");
	} catch (err: any) {
		if (err.name)
			return res.json({ err: "Error: Duplicate username or email" });
		res.json({ err });
	}
}
