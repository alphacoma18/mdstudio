import db_projects, { mongooseId } from "@/db/projects/flat";
import serverWrapper from "components/server/serverWrapper";
import GenError from "utils/gen/error";
interface IBody {
	projectName: string;
	projectDescription: string;
}
export default serverWrapper(async (req, res, session) => {
	const { projectName, projectDescription }: IBody = req.body;
	if (!session?.user.userId) throw new GenError("Unauthorized", 401);
	if (projectName.length < 1 || projectName.length > 20)
		throw new GenError("Invalid project name", 400);
	const _id = mongooseId();
	await db_projects.updateOne(
		{ userId: mongooseId(session.user.userId) },
		{
			$push: {
				projects: {
					_id,
					projectName,
					projectDescription,
					isPublished: false,
					fileSystem: [
						{
							_id: mongooseId(),
							folderName: "_root",
							isDir: true,
							parentId: null,
						},
					],
				},
			},
		}
	);
	res.json({ id: _id.toString() });
});
