import dynamic from "next/dynamic";
import GenSuspense from "../components/gen/suspense";
import IndexContent from "../components/pages/index/content";
import { NextPageWithLayout } from "./_app";

const IndexNav = dynamic(() => import("../components/pages/index/nav"), {
	suspense: true,
});
const IndexFooter = dynamic(() => import("../components/pages/index/footer"), {
	suspense: true,
});

const IndexPage: NextPageWithLayout = () => {
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

export default IndexPage;
