import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";

import BotBar from "../components/pages/index/botbar";
import Canvas from "../components/pages/index/canvas";
import Nav from "../components/pages/index/nav";
import Sidebar from "../components/pages/index/sidebar";
import MobileNav from "../components/pages/index/_mobile/mobileNav";
import GlobalContext from "../utils/context";
import Lorem from "../utils/lorem";
import styles from "./index.module.css";
/**
 *  Todo:
 * 1. Modify global context
 * 2. Create login/signup feature and store in Global Context
 * 3. Make axios with credentials
 * 4. Create publish feature
 * 5. Make api and program to save in file system
 * 6. Make database schema
 * 7. Allow for retrieval on login based on credentials for edit
 * 8. Check for published markdown
 */
const App: NextPage = () => {
	const { isLightTheme } = useContext(GlobalContext);
	const [leftBarOpen, setLeftBarOpen] = useState<boolean>(false);
	const [rightBarOpen, setRightBarOpen] = useState<boolean>(false);
	const [explorerOpen, setExplorerOpen] = useState<boolean>(false);

	const [isPreview, setIsPreview] = useState<boolean>(false);

	const [characterCount, setCharacterCount] = useState<number>(0);
	const [wordCount, setWordCount] = useState<number>(0);
	const [textInput, setTextInput] = useState<string>(Lorem());
	function handleTextInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setTextInput(e.currentTarget.value);
	}
	useEffect(() => {
		setCharacterCount(textInput.length);
		setWordCount(textInput.split(/\S+/).length - 1);
	}, [textInput]);

	function handleExplorerOpen() {
		setExplorerOpen((prev) => !prev);
	}
	function handleIsPreview() {
		setIsPreview((prev) => !prev);
	}
	function handleLeftBarOpen() {
		setLeftBarOpen((prev) => !prev);
	}
	function handleRightBarOpen() {
		setRightBarOpen((prev) => !prev);
	}

	return (
		<main className={isLightTheme ? styles.mainLight : styles.mainDark}>
			<MobileNav props={{ handleLeftBarOpen, handleRightBarOpen }} />
			<Nav props={{ rightBarOpen, handleIsPreview }} />
			<Sidebar props={{ leftBarOpen, explorerOpen, handleExplorerOpen }} />
			<Canvas props={{ handleTextInput, textInput, isPreview, explorerOpen }} />
			<BotBar props={{ characterCount, wordCount }} />
		</main>
	);
};
export default App;
