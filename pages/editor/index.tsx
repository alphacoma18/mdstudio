import { ReactElement, useContext } from "react";
import EditorCanvas from "../../components/pages/editor/canvas";
import EditorNav from "../../components/pages/editor/nav";
import EditorSidebar from "../../components/pages/editor/sidebar";
import EditorStatusBar from "../../components/pages/editor/statusbar";
import EditorMobileNav from "../../components/pages/editor/_mobile/mobileNav";
import { ContextProviderIndex } from "../../utils/context/index/index";
import ContextGlobal from "../../utils/context/_global";
import { NextPageWithLayout } from "../_app";
import styles from "./index.module.css";
const EditorPage: NextPageWithLayout = () => {
	const { isLightTheme } = useContext(ContextGlobal);
	return (
		<main className={isLightTheme ? styles.mainLight : styles.mainDark}>
			<EditorMobileNav />
			<EditorNav />
			<EditorSidebar />
			<EditorCanvas />
			<EditorStatusBar />
		</main>
	);
};
EditorPage.getLayout = function getLayout(page: ReactElement) {
	return <ContextProviderIndex>{page}</ContextProviderIndex>;
};
export default EditorPage; // <--- memo() removed
