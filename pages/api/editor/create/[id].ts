import db_projects, { mongooseId } from "@/db/projects/flat";
import serverWrapper from "components/server/wrapper";
import GenError from "utils/gen/error";
interface IBody {
	isFile: boolean;
	parent: string;
	name: string;
}
export default serverWrapper(async (req, res, session) => {
	const { isFile, parent, name }: IBody = req.body;
	const { id } = req.query;
	if (!session?.user.userId ?? !id) throw new GenError("Unauthorized", 401);
	if (!parent ?? !name) throw new GenError("Invalid body", 400);
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
								// parentId: mongooseId(parent),
						  }
						: {
								folderName: name,
								isDir: true,
								// parentId: mongooseId(parent),
						  }),
				},
			},
		},
		{
			new: true,
		}
	);
	console.log(data);

	res.status(200).json({ message: "success" });
});
