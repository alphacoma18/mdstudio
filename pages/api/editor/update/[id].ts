import db_projects, { isObjectId, mongooseId } from "@/db/projects/flat";
import serverWrapper from "components/wrapper/serverWrapper";
import GenError from "utils/gen/error";
interface IBody {
	projectId: string;
	content: string;
}
export default serverWrapper(async (req, res, session) => {
	const { id } = req.query;
	const { projectId, content }: IBody = req.body;
	if (!isObjectId(id)) throw new GenError("Invalid project id", 400);
	await db_projects.updateOne(
		{
			userId: mongooseId(session!.user.userId),
		},
		{
			$set: {
				"projects.$[project].fileSystem.$[file].content": content,
			},
		},
		{
			arrayFilters: [
				{
					"project._id": mongooseId(projectId),
				},
				{
					"file._id": mongooseId(id as string),
				},
			],
			// Note: THIS IS IMPORTANT
			strict: false,
		}
	);
	res.json({ OK: true });
});
