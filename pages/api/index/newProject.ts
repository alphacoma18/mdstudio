import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import db_projects from "../../../utils/db/account";
import MyError from "../../../utils/gen/error";
import { authOptions } from "../auth/[...nextauth]";
interface IBody {
	projectName: string;
}
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { projectName }: IBody = req.body;
		const session = await unstable_getServerSession(req, res, authOptions);
		if (!session?.user.userId) throw new MyError("Unauthorized", 401);
		const x = await db_projects.updateOne(
			{ userId: session.user.userId },
			{ $push: { projects: { projectName } } }
		);
		res.status(200).redirect("/");
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
}
