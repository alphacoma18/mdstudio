import ContextDashboard, {
	ContextProviderDashboard,
} from "@/context/dashboard";
import db_projects from "@/db/projects/flat";
import { ITreeProjects } from "@/db/projects/tree";
import { DashboardContent, DashboardNav } from "@/dynamic/dashboard";
import { authOptions, getServerSession } from "@/serverSession";
import { GetServerSideProps } from "next";
import { ReactElement, useContext, useEffect } from "react";
import { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout<{
	projects: ITreeProjects["projects"];
}> = ({ projects }) => {
	const { setProjects } = useContext(ContextDashboard);
	useEffect(() => {
		setProjects(projects);
	}, [projects, setProjects]);
	return (
		<main>
			<DashboardNav />
			<DashboardContent />
		</main>
	);
};
DashboardPage.getLayout = function getLayout(page: ReactElement) {
	return <ContextProviderDashboard>{page}</ContextProviderDashboard>;
};
export default DashboardPage; // Note: Do not memoize pages AT ALL
export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getServerSession(context.req, context.res, authOptions);
	const res = await db_projects.find({ userId: session?.user?.userId }).lean();
	return {
		props: {
			projects: JSON.parse(JSON.stringify(res?.[0]?.projects ?? [])),
		},
	};
};
