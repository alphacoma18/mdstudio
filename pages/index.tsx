import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import type { NextPage } from "next";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import Canvas from "../components/canvas";
import BotBar from "../components/botbar";
import MobileNav from "../components/_mobile/mobileNav";
import axios from "../utils/axios";
import Lorem from "../components/canvas/lorem";
import Loader from "../components/loader";
import { Profiler } from "react";

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
	const [leftBarOpen, setLeftBarOpen] = useState<boolean>(false);
	const [rightBarOpen, setRightBarOpen] = useState<boolean>(false);
	const [explorerOpen, setExplorerOpen] = useState<boolean>(false);

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

	async function handleSubmit() {
		await axios.post("/", {
			user: "",
			markdown: "",
		});
	}
	// function onRenderCallback(
	// 	id: string, // the "id" prop of the Profiler tree that has just committed
	// 	phase: string, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
	// 	actualDuration: number, // time spent rendering the committed update
	// 	baseDuration: number, // estimated time to render the entire subtree without memoization
	// 	startTime: number, // when React began rendering this update
	// 	commitTime: number, // when React committed this update
	// 	interactions: any // the Set of interactions belonging to this update
	// ) {
	// 	console.log({
	// 		id,
	// 		phase,
	// 		actualDuration,
	// 		baseDuration,
	// 		startTime,
	// 		commitTime,
	// 		interactions,
	// 	});

	// 	// Aggregate or log render timings...
	// }

	return (
		<main className={styles.main}>
			<MobileNav />
			<Nav />
			<Sidebar />
			{/* <Profiler id="canvas" onRender={onRenderCallback}> */}
			{/* </Profiler> */}
			<Canvas props={{ handleTextInput, textInput }} />
			<BotBar props={{ characterCount, wordCount }} />
			<Loader />
		</main>
	);
};
export default App;
