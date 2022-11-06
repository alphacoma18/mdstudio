import { ReactElement, useContext, useEffect, useState } from "react";
import Lorem from "../components/gen/lorem";
import BotBar from "../components/pages/index/botbar";
import Canvas from "../components/pages/index/canvas";
import Nav from "../components/pages/index/nav";
import Sidebar from "../components/pages/index/sidebar";
import MobileNav from "../components/pages/index/_mobile/mobileNav";
import axios from "../utils/axios";
import ContextGlobal from "../utils/context";
import { memo } from "react";
import ContextIndex, {
	ContextProviderIndex,
} from "../utils/context/index/index";
import styles from "./index.module.css";
import { NextPageWithLayout } from "./_app";
const IndexPage: NextPageWithLayout = () => {
	const { isLightTheme, setUser } = useContext(ContextGlobal);
	const { files, setFiles, newFiles, setNewFiles, currentFileId } =
		useContext(ContextIndex);
	const [leftBarOpen, setLeftBarOpen] = useState<boolean>(false);
	const [rightBarOpen, setRightBarOpen] = useState<boolean>(false);
	const [explorerOpen, setExplorerOpen] = useState<boolean>(false);

	// const [textInput, setTextInput] = useState<string>(() => {
	// 	return Object.values(files)[0]?.content || Lorem();
	// });

	// function handleTextInput(text: string) {
	// 	setTextInput(text);
	// }

	// useEffect(() => {
	// 	if (newFiles[currentFileId]) {
	// 		setNewFiles({
	// 			...newFiles,
	// 			[currentFileId]: {
	// 				...newFiles[currentFileId],
	// 				content: textInput,
	// 			},
	// 		});
	// 	} else {
	// 		setFiles({
	// 			...files,
	// 			[currentFileId]: {
	// 				...files[currentFileId],
	// 				content: textInput,
	// 			},
	// 		});
	// 	}
	// 	setCharacterCount(textInput.length);
	// 	setWordCount(textInput.split(/\S+/).length - 1);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [textInput, currentFileId]);

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
