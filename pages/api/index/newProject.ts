import { NextApiRequest, NextApiResponse } from "next";
import {
	authOptions,
	unstable_getServerSession,
} from "../../../exports/getServerSession";
import db_projects, { mongooseId } from "../../../utils/db/account";
import MyError from "../../../utils/gen/error";
interface IBody {
	projectName: string;
}
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { projectName }: IBody = req.body;
		const session = await unstable_getServerSession(req, res, authOptions);
		if (!session?.user.userId) throw new MyError("Unauthorized", 401);
		await db_projects.findOneAndUpdate(
			{ userId: session.user.userId },
			{
				$push: {
					projects: {
						_id: mongooseId(),
						projectName,
						projectDescription: "Hello World",
						settings: {},
						fileSystem: {},
					},
				},
			}
		);
		res.status(200).redirect("/");
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
}
