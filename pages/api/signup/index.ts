import { NextApiRequest, NextApiResponse } from "next";
interface Body {
	email: string;
	password: string;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
	const { email, password }: Body = req.body;
	if (!email || !password) throw "Error: Missing Email or Password";
	try {
	} catch (err: any) {
		res.json({ err });
	}
}
