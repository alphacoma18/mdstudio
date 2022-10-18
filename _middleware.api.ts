import { NextApiRequest, NextApiResponse } from "next";
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		console.log(req);
		console.log("Hello World");
	} catch (error) {
		console.log(error);
	}
}
