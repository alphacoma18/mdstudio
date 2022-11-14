import { NextApiRequest, NextApiResponse } from "next";
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		res.json({ message: "Success" });
	} catch (err: any) {
		res.json({ err });
	}
}
