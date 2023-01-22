import { mongooseId } from "@/db/projects/flat";
import { NextApiRequest, NextApiResponse } from "next";
import GenError from "utils/gen/error";
import { authOptions, unstable_getServerSession } from "@/serverSession";
interface IBody {
	projectName: string;
	projectDescription: string;
}
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { projectName, projectDescription }: IBody = req.body;
		const session = await unstable_getServerSession(req, res, authOptions);
		if (!session?.user.userId) throw new GenError("Unauthorized", 401);
		if (projectName.length < 1 || projectName.length > 20)
			throw new GenError("Invalid project name", 400);
		const _id = mongooseId();
		// await db_projects.findOneAndUpdate(
		// 	{ userId: session.user.userId },
		// 	{
		// 		$push: {
		// 			projects: {
		// 				_id,
		// 				projectName,
		// 				projectDescription,
		// 				fileSystem: [],
		// 			},
		// 		},
		// 	}
		// );
		console.log("New project created");
		res.status(200).redirect("/");
	} catch (error) {
		if (error instanceof GenError)
			res.status(error.status).json({ error: error.message });
	}
}
