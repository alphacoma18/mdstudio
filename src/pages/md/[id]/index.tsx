import EditorFS from "@/components/pages/editor/sidebar/fileExplorer/fs";
import ssgWrapper from "@/components/wrapper/ssgWrapper";
import db_projects, { mongooseId, serializeJSON } from "@/db/projects/flat";
import { run } from "@/db/projects/mongo";
import toTree from "@/utils/db/projects/mapper";
import { ITreeProjects } from "@/utils/db/projects/tree";
import { GetStaticPaths } from "next";
interface Props {
	data: ITreeProjects;
}
export default ({ data }: Props) => {
	return (
		<section>
			<EditorFS folder={data.projects[0].fileSystem} />
		</section>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	await run();
	const files = await db_projects.aggregate([
		{ $unwind: "$projects" },
		{ $unwind: "$projects.fileSystem" },
		{ $match: { "projects.fileSystem.isDir": false } },
		{ $group: { _id: "$projects.fileSystem._id" } },
		{ $project: { _id: 0, params: { id: { $toString: "$_id" } } } },
	]);

	return {
		paths: files,
		fallback: "blocking",
	};
};

export const getStaticProps = ssgWrapper(async (params) => {
	const _id = mongooseId(params.id as string);
	if (!_id) return { notFound: true };
	const [data] = await db_projects
		.aggregate([
			{
				$match: {
					"projects.fileSystem": {
						$elemMatch: {
							_id,
							isPublished: true,
						},
					},
				},
			},
		])
		.limit(1);
	return {
		props: {
			data: serializeJSON(toTree(data)),
		},
	};
});

// export default () => {
// 	return <h1>Hello World</h1>;
// };
