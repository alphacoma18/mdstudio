import ContextEditor, { ContextProviderEditor } from "@/context/editor";
import db_projects, { mongooseId } from "@/db/projects/flat";
import { ITreeProject } from "@/db/projects/tree";
import {
	EditorCanvas,
	EditorMobileNav,
	EditorNav,
	EditorSidebar,
	EditorStatusBar,
} from "@/dynamic/editor";
import { authOptions, getServerSession } from "@/serverSession";
import { GetServerSideProps } from "next";
import { ReactElement, useContext, useEffect } from "react";
import toTree from "../../utils/db/projects/mapper";
import { NextPageWithLayout } from "../_app";
import styles from "./index.module.css";
const EditorPage: NextPageWithLayout<{ data: ITreeProject }> = ({ data }) => {
	const { projectState, setProjectState } = useContext(ContextEditor);

	useEffect(() => {
		setProjectState(data);
	}, [projectState, setProjectState, data]);

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
	const projectId = context.params?.index?.[0] as string;

	const data = await db_projects.findOne(
		{
			userId: session?.user.userId,
			projects: { $elemMatch: { _id: mongooseId(projectId) } },
		},
		{
			"projects.$": 1,
		}
	);

	return {
		props: {
			data: JSON.parse(
				JSON.stringify(toTree(data?.projects[0].fileSystem ?? []))
			),
		},
	};
};
