import db_projects, { isObjectId, mongooseId } from "@/db/projects/flat";
import toTree from "@/db/projects/mapper";
import serverWrapper from "@/components/wrapper/serverWrapper";
import GenError from "@/utils/gen/error";
interface IBody {
	isFile: boolean;
	pid: string;
	name: string;
}
export default serverWrapper(async (req, res, session) => {
	const { isFile, pid, name }: IBody = req.body;
	const { id } = req.query;
	if (!isObjectId(id)) throw new GenError("Invalid project id", 400);
	if (!pid || !name) throw new GenError("Invalid body", 400);
	const _id = mongooseId(id as string);
	const data = await db_projects
		.findOneAndUpdate(
			{
				userId: mongooseId(session.userId),
				"projects._id": _id,
			},
			{
				$push: {
					"projects.$.fileSystem": {
						_id: mongooseId(),
						parentId: mongooseId(pid),
						...(isFile
							? {
									fileName: name,
									isDir: false,
									content: "",
							  }
							: {
									folderName: name,
									isDir: true,
							  }),
					},
				},
			},
			{
				projection: {
					projects: {
						$elemMatch: { _id },
					},
				},
				new: true,
			},
		)
		.lean();
	res.json({ fileSystem: toTree(data?.projects[0].fileSystem ?? []) });
});
