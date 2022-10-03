import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import BotBar from "../components/pages/index/botbar";
import Canvas from "../components/pages/index/canvas";
import Nav from "../components/pages/index/nav";
import Sidebar from "../components/pages/index/sidebar";
import MobileNav from "../components/pages/index/_mobile/mobileNav";
import GlobalContext from "../utils/context";
import Lorem from "../components/gen/lorem";
import styles from "./index.module.css";
/**
 *  Todo:
 * 1. Create publish feature
 * 2. Make api and program to save in file system
 * 3. Make database schema
 * 4. Allow for retrieval on login based on credentials for edit
 * 5. Check for published markdown
 *
 * 6. Make global component axios with loader in app
 */
const App: NextPage = () => {
	const { isLightTheme } = useContext(GlobalContext);
	const [leftBarOpen, setLeftBarOpen] = useState<boolean>(false);
	const [rightBarOpen, setRightBarOpen] = useState<boolean>(false);
	const [explorerOpen, setExplorerOpen] = useState<boolean>(false);

	const [characterCount, setCharacterCount] = useState<number>(0);
	const [wordCount, setWordCount] = useState<number>(0);
	const [textInput, setTextInput] = useState<string>(Lorem());
	function handleTextInput(text: string) {
		setTextInput(text);
	}

	useEffect(() => {
		setCharacterCount(textInput.length);
		setWordCount(textInput.split(/\S+/).length - 1);
	}, [textInput]);

	function handleExplorerOpen() {
		setExplorerOpen((prev) => !prev);
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
			<Nav props={{ rightBarOpen }} />
			<Sidebar props={{ leftBarOpen, explorerOpen, handleExplorerOpen }} />
			<Canvas props={{ handleTextInput, textInput, explorerOpen }} />
			<BotBar props={{ characterCount, wordCount }} />
		</main>
	);
};
export default App;
