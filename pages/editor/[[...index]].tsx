import ContextEditor, { ContextProviderEditor } from "@/context/editor";
import db_projects, { isObjectId, mongooseId } from "@/db/projects/flat";
import toTree from "@/db/projects/mapper";
import { ITreeProject } from "@/db/projects/tree";
import {
	EditorCanvas,
	EditorMobileNav,
	EditorNav,
	EditorSidebar,
	EditorStatusBar,
} from "@/dynamic/editor";
import ssrWrapper from "components/server/ssrWrapper";
import { ReactElement, useContext, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import styles from "./index.module.css";
const EditorPage: NextPageWithLayout<{ data: ITreeProject }> = ({ data }) => {
	const { setProjectState, setEditorState } = useContext(ContextEditor);

	useEffect(() => {
		setEditorState({
			// set id to first file in project
			id: data.fileSystem.files[0]._id.toString() || "",
			pid: data.fileSystem._id.toString() || "",
			path: "/",
		});
		setProjectState(data);
		return () => {
			setEditorState({ id: "", pid: "", path: "" });
			setProjectState({} as ITreeProject);
		};
	}, [data, setProjectState, setEditorState]);

	return (
		<main className={styles.main}>
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
	const projectId = context.params?.index?.[0];
	if (!isObjectId(projectId)) return { notFound: true };
	const dbData = await db_projects.aggregate([
		{
			$match: {
				$and: [
					{ userId: mongooseId(session?.user.userId) },
					{ projects: { $elemMatch: { _id: mongooseId(projectId) } } },
				],
			},
		},
		{
			$project: {
				projects: {
					$filter: {
						input: "$projects",
						as: "project",
						cond: { $eq: ["$$project._id", mongooseId(projectId)] },
					},
				},
			},
		},
		{
			$unwind: "$projects",
		},
	]);
	return {
		props: {
			data: JSON.parse(
				JSON.stringify({
					...dbData[0].projects,
					fileSystem: toTree(dbData[0].projects.fileSystem || []),
				})
			),
		},
	};
});
