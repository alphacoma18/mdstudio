import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth/next";
import dynamic from "next/dynamic";
import { ReactElement, useContext, useEffect } from "react";
import GenSuspense from "../components/gen/suspense";
import IndexContent from "../components/pages/index/content";
import ContextIndex, { ContextProviderIndex } from "../utils/context/index";
import db_projects, { TProjects } from "../utils/db/account";
import { NextPageWithLayout } from "./_app";
import { authOptions } from "./api/auth/[...nextauth]";

const IndexNav = dynamic(
	async () => await import("../components/pages/index/nav"),
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

const IndexPage: NextPageWithLayout<TProjects["projects"]> = (props) => {
	const { handleProjects } = useContext(ContextIndex);
	props;
	useEffect(() => {
		if (props) handleProjects(props);
	}, [handleProjects, props]);
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
	const res = await db_projects.find({ userId: session?.user?.userId });
	console.log("res", res?.[0]?.["projects"]);

	return {
		props: {
			projects:
				JSON.parse(JSON.stringify(res)) ?? JSON.parse(JSON.stringify([])),
		},
	};
};
