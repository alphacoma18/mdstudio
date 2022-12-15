import { NextApiRequest, NextApiResponse } from "next";
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		// const { method, url, payload } = req.body;
		console.log("Hello World");
		// console.log(method, url, payload);
		res.status(200).json({ message: "success" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
}
