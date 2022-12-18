import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
// import DB_PROJECTS, { mongooseId } from "../../../utils/db/account";
import MyError from "../../../utils/gen/error";
import { authOptions } from "../auth/[...nextauth]";
interface IBody {
	fileName: string;
}
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { fileName }: IBody = req.body;
		const session = await unstable_getServerSession(req, res, authOptions);
		if (!session?.user.userId) throw new MyError("Unauthorized", 401);
		res.status(200).json({ message: "success" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
}
