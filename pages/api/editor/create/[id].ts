import db_projects, { mongooseId } from "@/db/projects/flat";
import toTree from "@/db/projects/mapper";
import serverWrapper from "components/server/serverWrapper";
import GenError from "utils/gen/error";
interface IBody {
	isFile: boolean;
	pid: string;
	name: string;
}
export default serverWrapper(async (req, res, session) => {
	const { isFile, pid, name }: IBody = req.body;
	const { id } = req.query;
	if (!session?.user.userId || !id) throw new GenError("Unauthorized", 401);
	if (!pid || !name) throw new GenError("Invalid body", 400);
	// return specific array element
	const data = await db_projects.findOneAndUpdate(
		{
			userId: mongooseId(session.user.userId),
			"projects._id": mongooseId(id as string),
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
					$elemMatch: { _id: mongooseId(id as string) },
				},
			},
			new: true,
		}
	);
	res.json({ fileSystem: toTree(data?.projects[0].fileSystem ?? []) });
});
