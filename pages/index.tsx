import { NextPageWithLayout } from "./_app";
import IndexNav from "../components/pages/index/nav";
import IndexContent from "../components/pages/index/content";
const IndexPage: NextPageWithLayout = () => {
	return (
    <main>
      <IndexNav />
      <IndexContent />
		</main>
	);
};

export default IndexPage;
