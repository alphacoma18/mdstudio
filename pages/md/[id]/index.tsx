// import db_projects, {
// 	TFlatProject,
// 	mongooseId,
// 	serializeJSON,
// } from "@/db/projects/flat";
// import { run } from "@/db/projects/mongo";
// import ssgWrapper from "components/wrapper/ssgWrapper";
// import { GetStaticPaths } from "next";
// import dynamic from "next/dynamic";
// import { useState } from "react";
// const SimpleMdeReact = dynamic(
// 	async () => await import("react-simplemde-editor"),
// 	{
// 		ssr: false,
// 	}
// );

// interface Props {
// 	data: TFlatProject;
// }
// export default ({ data }: Props) => {
// 	const [content, setContent] = useState<string>("");

// 	return (
// 		<div>
// 			<h1>{data._id?.toString()}</h1>
// 			<SimpleMdeReact
// 				options={{
// 					sideBySideFullscreen: false,
// 					toolbar: false,
// 					toolbarTips: false,
// 					status: false,
// 					spellChecker: false,
// 					nativeSpellcheck: false,
// 				}}
// 				value={content}
// 				onChange={() => {}}
// 			/>
// 		</div>
// 	);
// };

// export const getStaticPaths: GetStaticPaths = async () => {
// 	await run();
// 	const files = await db_projects.aggregate([
// 		{ $unwind: "$projects" },
// 		{ $unwind: "$projects.fileSystem" },
// 		{ $match: { "projects.fileSystem.isDir": false } },
// 		{ $group: { _id: "$projects.fileSystem._id" } },
// 		{ $project: { _id: 0, params: { id: { $toString: "$_id" } } } },
// 	]);

// 	return {
// 		paths: files,
// 		fallback: "blocking",
// 	};
// };

// export const getStaticProps = ssgWrapper(async (context) => {
// 	const id = context.params?.id;
// 	if (!id || typeof id !== "string") return { notFound: true };
// 	const _id = mongooseId(id);
// 	if (!_id) return { notFound: true };
// 	const [data] = await db_projects
// 		.aggregate([
// 			{
// 				$match: {
// 					"projects.fileSystem": {
// 						$elemMatch: {
// 							_id,
// 							isDir: false,
// 						},
// 					},
// 				},
// 			},
// 		])
// 		.limit(1);
// 	return {
// 		props: {
// 			data: serializeJSON(data),
// 		},
// 	};
// });

export default () => {
	return <h1>Hello World</h1>;
};
