import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { method } = req;
		console.log(method);
		res.json({ message: "Hello World" });
	} catch (err: any) {
		res.status(500).json({ message: err.message });
	}
}
