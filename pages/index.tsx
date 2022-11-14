import { memo, ReactElement, useContext, useState } from "react";
import BotBar from "../components/pages/index/botbar";
import Canvas from "../components/pages/index/canvas";
import Nav from "../components/pages/index/nav";
import Sidebar from "../components/pages/index/sidebar";
import MobileNav from "../components/pages/index/_mobile/mobileNav";
import { ContextProviderIndex } from "../utils/context/index/index";
import ContextGlobal from "../utils/context/_global";
import styles from "./index.module.css";
import { NextPageWithLayout } from "./_app";
const IndexPage: NextPageWithLayout = () => {
	const { isLightTheme } = useContext(ContextGlobal);
	const [leftBarOpen, setLeftBarOpen] = useState<boolean>(false);
	const [rightBarOpen, setRightBarOpen] = useState<boolean>(false);
	const [explorerOpen, setExplorerOpen] = useState<boolean>(false);

	function handleExplorerOpen() {
		setExplorerOpen((prev) => !prev);
	}
	function handleLeftBarOpen() {
		if (leftBarOpen) setExplorerOpen(false);
		if (rightBarOpen) setRightBarOpen(false);
		setLeftBarOpen((prev) => !prev);
	}
	function handleRightBarOpen() {
		if (leftBarOpen) setLeftBarOpen(false);
		setExplorerOpen(false);
		setRightBarOpen((prev) => !prev);
	}

	return (
		<main className={isLightTheme ? styles.mainLight : styles.mainDark}>
			<MobileNav props={{ handleLeftBarOpen, handleRightBarOpen }} />
			<Nav props={{ rightBarOpen }} />
			<Sidebar props={{ leftBarOpen, explorerOpen, handleExplorerOpen }} />
			<Canvas props={{ explorerOpen }} />
			<BotBar />
		</main>
	);
};
IndexPage.getLayout = function getLayout(page: ReactElement) {
	return <ContextProviderIndex>{page}</ContextProviderIndex>;
};
export default memo(IndexPage); // <--- memo() here
