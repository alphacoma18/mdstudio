import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import MyError from "../../../utils/gen/error";
import { authOptions } from "../auth/[...nextauth]";
interface IBody {
	id: string;
	path: string;
	folderName: string;
}
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { id, path, folderName }: IBody = req.body;
		const session = await unstable_getServerSession(req, res, authOptions);
		if (!session?.user.userId) throw new MyError("Unauthorized", 401);
		const pathArr = path.split("/");
		console.log(id, pathArr, folderName);

		// // console.log(id, pathArr, folderName);
		// for (let i = 0; i < 10; i++) {
		// 	console.log(id);
		// }
		// const data = await db_projects.findOne(
		// 	{
		// 		userId: session?.user.userId,
		// 		projects: { $elemMatch: { _id: projectId } },
		// 	},
		// 	{
		// 		"projects.$": 1,
		// 	}
		// );

		// console.log(data);
		res.status(200).json({ message: "success" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
}
