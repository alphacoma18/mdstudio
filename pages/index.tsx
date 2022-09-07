import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import type { NextPage } from "next";
import { Resizable } from "re-resizable";
import { marked } from "marked";

const App: NextPage = () => {
	const [textInput, setTextInput] = useState<string>("");
	const [textOutput, setTextOutput] = useState<string>("");
	useEffect(() => {
		setTextOutput(marked(textInput));
	}, [textInput]);
	const [state, setState] = useState({ width: "50vw", height: "100%" });
	return (
		<main className={styles.main}>
			<nav className={styles.navbar}>
				<div></div>
				<div>
					<button className={styles.navButtons}>Preview</button>
					<button className={styles.navButtons}>Publish</button>
					<button className={styles.navButtons}>Login/Signup</button>
				</div>
			</nav>

			<div className={styles.sidebar}>Hello</div>
			<div className={styles.inputMarkdown}>
				<Resizable
					className={styles.resizableCanvas}
					size={{ width: state.width, height: state.height }}
					boundsByDirection={true}
					enable={{
						top: false,
						right: true,
						bottom: false,
						left: false,
						topRight: false,
						bottomRight: false,
						bottomLeft: false,
						topLeft: false,
					}}
					minWidth={"25vw"}
					maxWidth={"70vw"}
					onResizeStop={(e, direction, ref, d) => {
						setState({
							width: state.width + d.width,
							height: state.height + d.height,
						});
					}}
				>
					<textarea
						required
						className={styles.textarea}
						value={textInput}
						onChange={(e) => {
							setTextInput(e.currentTarget.value);
						}}
					></textarea>
				</Resizable>
			</div>
			<div className={styles.outputMarkdown}>
				<div
					dangerouslySetInnerHTML={{ __html: textOutput }}
				></div>
			</div>

			<footer className={styles.footer}>Hello</footer>
		</main>
	);
};

export default App;
