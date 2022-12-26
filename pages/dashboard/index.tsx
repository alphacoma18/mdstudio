import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { ReactElement, useContext, useEffect } from "react";
import GenSuspense from "../../components/gen/suspense";
import {
	authOptions,
	unstable_getServerSession,
} from "../../exports/getServerSession";
import ContextDashboard, {
	ContextProviderDashboard,
} from "../../utils/context/dashboard/index";
import db_projects, { TProjects } from "../../utils/db/account";
import { NextPageWithLayout } from "../_app";

const DashboardNav = dynamic(
	async () => await import("../../components/pages/dashboard/nav"),
	{
		suspense: true,
	}
);
const DashboardContent = dynamic(
	async () => await import("../../components/pages/dashboard/content"),
	{
		suspense: true,
	}
);
const DashboardFooter = dynamic(
	async () => await import("../../components/pages/dashboard/footer"),
	{
		suspense: true,
	}
);

const IndexPage: NextPageWithLayout<{ projects: TProjects["projects"] }> = ({
	projects,
}) => {
	const { handleProjects } = useContext(ContextDashboard);
	useEffect(() => {
		if (projects) handleProjects(projects);
	}, [projects, handleProjects]);
	return (
		<main>
			<GenSuspense fallback="Loading Nav...">
				<DashboardNav />
			</GenSuspense>
			<GenSuspense fallback="Loading Content...">
				<DashboardContent />
			</GenSuspense>
			<GenSuspense fallback="Loading Footer...">
				<DashboardFooter />
			</GenSuspense>
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
	const res = await db_projects.find({ userId: session?.user?.userId });
	return {
		props: {
			projects: JSON.parse(JSON.stringify(res?.[0]?.projects ?? [])),
		},
	};
};
