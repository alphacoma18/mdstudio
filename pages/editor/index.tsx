import dynamic from "next/dynamic";
import { ReactElement, useContext } from "react";
import GenSuspense from "../../components/gen/suspense";
import { ContextProviderIndex } from "../../utils/context/index/index";
import ContextGlobal from "../../utils/context/_global";
import { NextPageWithLayout } from "../_app";
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
const EditorPage: NextPageWithLayout = () => {
	const { isLightTheme } = useContext(ContextGlobal);
	return (
		<main className={isLightTheme ? styles.mainLight : styles.mainDark}>
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
	return <ContextProviderIndex>{page}</ContextProviderIndex>;
};
export default EditorPage; // <--- memo() removed
