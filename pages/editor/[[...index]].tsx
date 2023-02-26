import ContextEditor, { ContextProviderEditor } from "@/context/editor";
import db_projects, { isObjectId, mongooseId } from "@/db/projects/flat";
import { ITreeProject } from "@/db/projects/tree";
import {
	EditorCanvas,
	EditorMobileNav,
	EditorNav,
	EditorSidebar,
	EditorStatusBar,
} from "@/dynamic/editor";
import { authOptions, getServerSession } from "@/serverSession";
import toTree from "utils/db/projects/mapper";
import { GetServerSideProps } from "next";
import { ReactElement, useContext, useEffect } from "react";
import { NextPageWithLayout } from "../_app";
import styles from "./index.module.css";
const EditorPage: NextPageWithLayout<{ data: ITreeProject }> = ({ data }) => {
	const { setProjectState, setEditorState } = useContext(ContextEditor);

	useEffect(() => {
		setEditorState({
			id: data.fileSystem?._id?.toString(),
			pid: data.fileSystem?._id?.toString(),
			path: "/",
		});
		setProjectState(data);
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

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getServerSession(context.req, context.res, authOptions);
	const projectId = context.params?.index?.[0];
	if (!isObjectId(projectId)) return { notFound: true };
	const data = await db_projects
		.findOne({
			userId: session?.user.userId,
			projects: { $elemMatch: { _id: mongooseId(projectId) } },
		})
		.lean();
	const data2 = toTree(data?.projects[0].fileSystem ?? []);

	return {
		props: {
			data: JSON.parse(
				JSON.stringify({
					...data?.projects[0],
					fileSystem: data2[0],
				})
			),
		},
	};
};
