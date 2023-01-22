import ContextDashboard, {
	ContextProviderDashboard,
} from "@/context/dashboard";
import {
	DashboardContent,
	DashboardFooter,
	DashboardNav,
} from "@/dynamic/dashboard";
import { GetServerSideProps } from "next";
import { ReactElement, useContext, useEffect } from "react";
import { authOptions, unstable_getServerSession } from "@/serverSession";
import { ITreeProjects } from "@/db/projects/tree";
import { NextPageWithLayout } from "../_app";

const IndexPage: NextPageWithLayout<{
	projects: ITreeProjects["projects"];
}> = ({ projects }) => {
	const { handleProjects } = useContext(ContextDashboard);
	useEffect(() => {
		if (projects) handleProjects(projects);
	}, [projects, handleProjects]);
	return (
		<main>
			<DashboardNav />
			<DashboardContent />
			<DashboardFooter />
		</main>
	);
};
IndexPage.getLayout = function getLayout(page: ReactElement) {
	return <ContextProviderDashboard>{page}</ContextProviderDashboard>;
};
export default IndexPage;
export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await unstable_getServerSession(
		context.req,
		context.res,
		authOptions
	);
	console.log("Hello World", context.req.url);
	// const res = await db_projects.find({ userId: session?.user?.userId });
	return {
		props: {
			projects: JSON.parse(JSON.stringify([])),
			// projects: JSON.parse(JSON.stringify(res?.[0]?.projects ?? [])),
		},
	};
};
