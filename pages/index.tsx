import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { ReactElement, useContext, useEffect } from "react";
import GenSuspense from "../components/gen/suspense";
import {
	authOptions,
	unstable_getServerSession,
} from "../exports/getServerSession";
import ContextIndex, { ContextProviderIndex } from "../utils/context/index";
import db_projects, { TProjects } from "../utils/db/account";
import { NextPageWithLayout } from "./_app";

const IndexNav = dynamic(
	async () => await import("../components/pages/index/nav"),
	{
		suspense: true,
	}
);
const IndexContent = dynamic(
	async () => await import("../components/pages/index/content"),
	{
		suspense: true,
	}
);
const IndexFooter = dynamic(
	async () => await import("../components/pages/index/footer"),
	{
		suspense: true,
	}
);

const IndexPage: NextPageWithLayout<{ projects: TProjects["projects"] }> = ({
	projects,
}) => {
	const { handleProjects } = useContext(ContextIndex);
	useEffect(() => {
		if (projects) handleProjects(projects);
	}, [projects, handleProjects]);
	return (
		<main>
			<GenSuspense fallback="Loading Nav...">
				<IndexNav />
			</GenSuspense>
			<GenSuspense fallback="Loading Content...">
				<IndexContent />
			</GenSuspense>
			<GenSuspense fallback="Loading Footer...">
				<IndexFooter />
			</GenSuspense>
		</main>
	);
};
IndexPage.getLayout = function getLayout(page: ReactElement) {
	return <ContextProviderIndex>{page}</ContextProviderIndex>;
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
