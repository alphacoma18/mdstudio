import db_projects, { mongooseId } from "@/db/projects/flat";
import serverWrapper from "@/components/wrapper/serverWrapper";
import GenError from "@/utils/gen/error";
interface IBody {
	projectName: string;
	projectDescription: string;
}
export default serverWrapper(async (req, res, sessionUser) => {
	const { projectName, projectDescription }: IBody = req.body;
	if (projectName.length < 1 || projectName.length > 20)
		throw new GenError("Invalid project name", 400);
	const _id = mongooseId(),
		rootId = mongooseId();
	await db_projects.updateOne(
		{ userId: mongooseId(sessionUser.userId) },
		{
			$push: {
				projects: {
					_id,
					projectName,
					projectDescription,
					isPublished: false,
					fileSystem: [
						{
							_id: rootId,
							folderName: "_root",
							isDir: true,
							parentId: null,
						},
						{
							_id: mongooseId(),
							fileName: "index",
							isDir: false,
							parentId: rootId,
							content: "",
						},
					],
				},
			},
		},
	);
	res.json({ id: _id.toString() });
});
