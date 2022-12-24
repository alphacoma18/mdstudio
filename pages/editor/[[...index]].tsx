import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth/next";
import dynamic from "next/dynamic";
import { ReactElement, useContext, useEffect } from "react";
import GenSuspense from "../../components/gen/suspense";
import ContextEditor, {
	ContextProviderEditor,
} from "../../utils/context/editor/index";
import db_projects, { TProject } from "../../utils/db/account";
import { NextPageWithLayout } from "../_app";
import { authOptions } from "../api/auth/[...nextauth]";
import styles from "./index.module.css";
const EditorCanvas = dynamic(
	async () => await import("../../components/pages/editor/canvas"),
	{
		suspense: true,
	}
);
const EditorNav = dynamic(
	async () => await import("../../components/pages/editor/nav"),
	{
		suspense: true,
	}
);
const EditorSidebar = dynamic(
	async () => await import("../../components/pages/editor/sidebar"),
	{
		suspense: true,
	}
);
const EditorStatusBar = dynamic(
	async () => await import("../../components/pages/editor/statusbar"),
	{
		suspense: true,
	}
);
const EditorMobileNav = dynamic(
	async () => await import("../../components/pages/editor/_mobile/mobileNav"),
	{
		suspense: true,
	}
);
const EditorPage: NextPageWithLayout<{ data: TProject }> = ({ data }) => {
	const { projectState, setProjectState } = useContext(ContextEditor);

	useEffect(() => {
		setProjectState(data);
	}, [projectState, setProjectState, data]);

	return (
		<main className={styles.main}>
			<GenSuspense fallback="Loading Nav...">
				<EditorMobileNav />
			</GenSuspense>
			<GenSuspense fallback="Loading Nav...">
				<EditorNav />
			</GenSuspense>
			<GenSuspense fallback="Loading Sidebar...">
				<EditorSidebar />
			</GenSuspense>
			<GenSuspense fallback="Loading Canvas...">
				<EditorCanvas />
			</GenSuspense>
			<GenSuspense fallback="Loading Status Bar">
				<EditorStatusBar />
			</GenSuspense>
		</main>
	);
};
EditorPage.getLayout = function getLayout(page: ReactElement) {
	return <ContextProviderEditor>{page}</ContextProviderEditor>;
};
export default EditorPage; // <--- memo() removed

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await unstable_getServerSession(
		context.req,
		context.res,
		authOptions
	);
	const projectId = context.params?.index?.[0] as string;
	console.log(projectId);

	const data = await db_projects.findOne(
		{
			userId: session?.user.userId,
			projects: { $elemMatch: { _id: projectId } },
		},
		{
			"projects.$": 1,
		}
	);
	console.log(data);
	return {
		props: {
			data: JSON.parse(JSON.stringify(data?.projects[0] ?? {})),
		},
	};
};
