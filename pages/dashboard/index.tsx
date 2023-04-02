import ContextDashboard, {
	ContextProviderDashboard,
} from "@/context/dashboard";
import db_projects, { mongooseId, serializeJSON } from "@/db/projects/flat";
import { ITreeProjects } from "@/db/projects/tree";
import { DashboardContent, DashboardNav } from "@/dynamic/dashboard";
import GenMeta from "@/gen/meta";
import ssrWrapper from "components/wrapper/ssrWrapper";
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
			<GenMeta
				props={{
					title: "Dashboard | AnyMD Publisher",
					description: "Dashboard for AnyMD Publisher",
				}}
			/>
			<DashboardNav />
			<DashboardContent />
		</main>
	);
};
DashboardPage.getLayout = function getLayout(page: ReactElement) {
	return <ContextProviderDashboard>{page}</ContextProviderDashboard>;
};
export default DashboardPage; // Note: Do not memoize pages AT ALL

export const getServerSideProps = ssrWrapper(async (_, session) => {
	const res = await db_projects
		.find({ userId: mongooseId(session?.user?.userId) })
		.lean();
	return {
		props: {
			projects: serializeJSON(res[0].projects),
		},
	};
});
