import db_projects, { mongooseId } from "@/db/projects/flat";
import serverWrapper from "components/server/serverWrapper";
import GenError from "utils/gen/error";
export default serverWrapper(async (req, res, session) => {
	const { id } = req.query;
	if (!id) throw new GenError("Invalid project id", 400);
	const data = await db_projects
		.aggregate([
			{
				$match: {
					$and: [
						{ userId: mongooseId(session!.user.userId) },
						{ "projects.fileSystem._id": mongooseId(id as string) },
					],
				},
			},
			{ $unwind: "$projects" },
			{
				$project: {
					projects: {
						$filter: {
							input: "$projects.fileSystem",
							as: "file",
							cond: { $eq: ["$$file._id", mongooseId(id as string)] },
						},
					},
				},
			},
			{ $unwind: "$projects" },
		])
		.project({ _id: 0, "projects.content": 1 })
		.exec();
	if (!data) throw new GenError("Project not found", 404);
	res.json({ content: data[0].projects.content });
});
