import { NextApiRequest, NextApiResponse } from "next";
import db_projects from "../../../utils/db/account";
import MyError from "../../../utils/gen/error";
import {
	authOptions,
	unstable_getServerSession,
} from "../../../exports/getServerSession";
interface IBody {
	projectName: string;
}
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { projectName }: IBody = req.body;
		const session = await unstable_getServerSession(req, res, authOptions);
		if (!session?.user.userId) throw new MyError("Unauthorized", 401);
		// create new project in db with the name of projectName and add a default file structure with a default index.html file
		await db_projects.findOneAndUpdate(
			{ userId: session.user.userId },
			{
				$push: {
					projects: {
						projectName,
						projectDescription: "Hello WOrld",
						settings: {},
						fileSystem: {},
					},
				},
			}
		);
		console.log("New project created");

		res.status(200).redirect("/");
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
}
