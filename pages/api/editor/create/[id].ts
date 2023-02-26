import db_projects, { mongooseId } from "@/db/projects/flat";
import serverWrapper from "components/server/wrapper";
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
	const data = await db_projects.findOneAndUpdate(
		{
			userId: session.user.userId,
			"projects._id": mongooseId(id as string),
		},
		{
			$push: {
				"projects.$.fileSystem": {
					_id: mongooseId(),
					...(isFile
						? {
								fileName: name,
								isDir: false,
								content: "",
								parentId: mongooseId(pid),
						  }
						: {
								folderName: name,
								isDir: true,
								parentId: mongooseId(pid),
						  }),
				},
			},
		},
		{
			new: true,
		}
	);
	// TODO: return the new file/folder
	res.status(200).json({ data });
});
