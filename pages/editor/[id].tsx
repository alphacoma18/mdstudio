import ContextEditor, { ContextProviderEditor } from "@/context/editor";
import db_projects, {
	isObjectId,
	mongooseId,
	serializeJSON,
} from "@/db/projects/flat";
import toTree from "@/db/projects/mapper";
import { ITreeProject } from "@/db/projects/tree";
import {
	EditorCanvas,
	EditorMobileNav,
	EditorNav,
	EditorSidebar,
	EditorStatusBar,
} from "@/dynamic/editor";
import GenMeta from "@/gen/meta";
import ssrWrapper from "components/wrapper/ssrWrapper";
import { ReactElement, useContext, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import styles from "./index.module.css";
const EditorPage: NextPageWithLayout<{ data: ITreeProject }> = ({ data }) => {
	const { setProjectState, setEditorState } = useContext(ContextEditor);
	const initialData = data.fileSystem.files[0];
	useEffect(() => {
		setEditorState({
			id: initialData._id.toString(),
			name: initialData.fileName,
			pid: data.fileSystem._id.toString(),
			path: "/",
		});
		setProjectState(data);
	}, [data, setProjectState, setEditorState]);

	return (
		<main className={styles.main}>
			<GenMeta
				props={{
					title: `${data.projectName}`,
					description: `${data.projectDescription}`,
				}}
			/>
			<EditorMobileNav />
			<EditorNav />
			<EditorSidebar />
			<EditorCanvas />
			<EditorStatusBar />
		</main>
	);
};
EditorPage.getLayout = function getLayout(page: ReactElement) {
	return <ContextProviderEditor>{page}</ContextProviderEditor>;
};
export default EditorPage; // <--- memo() removed

export const getServerSideProps = ssrWrapper(async (context, session) => {
	const id = context.params?.id;
	if (!isObjectId(id)) return { notFound: true };
	const _id = mongooseId(id as string);
	const [data] = await db_projects
		.aggregate([
			{
				$match: {
					$and: [
						{ userId: mongooseId(session?.user.userId) },
						{ projects: { $elemMatch: { _id } } },
					],
				},
			},
			{
				$project: {
					projects: {
						$filter: {
							input: "$projects",
							as: "project",
							cond: { $eq: ["$$project._id", _id] },
						},
					},
				},
			},
			{
				$unwind: "$projects",
			},
			{
				$replaceRoot: {
					newRoot: "$projects",
				},
			},
		])
		.limit(1);
	return {
		props: {
			data: serializeJSON({
				...data,
				fileSystem: toTree(data.fileSystem),
			}),
		},
	};
});
