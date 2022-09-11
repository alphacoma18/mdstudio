import React, { useState, useContext } from "react";
import styles from "./index.module.css";
import GlobalContext from "../../utils/context";
import { Resizable } from "re-resizable";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import Lorem from "./lorem";

const Canvas: React.FC = () => {
	const { handleCount, explorerOpen } = useContext(GlobalContext);
	const [textInput, setTextInput] = useState<string>(Lorem());
	return (
		<>
			<ScrollSync>
				<>
					<Resizable
						className={
							explorerOpen ? styles.resizableOpen : styles.resizableCanvas
						}
						defaultSize={{
							width: "45vw",
							height: "100%",
						}}
						bounds={"parent"}
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
					>
						<ScrollSyncPane>
							<textarea
								className={styles.textarea}
								value={textInput}
								spellCheck="false"
								wrap="hard"
								autoCapitalize="none"
								placeholder=">>> Type or paste your markdown here"
								onChange={(e) => {
									setTextInput(e.currentTarget.value);
									handleCount(e.currentTarget.value);
								}}
							></textarea>
						</ScrollSyncPane>
					</Resizable>
					<ScrollSyncPane>
						<div className={styles.outputMarkdown}>
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								className={styles.markdown}
							>
								{textInput}
							</ReactMarkdown>
						</div>
					</ScrollSyncPane>
				</>
			</ScrollSync>
		</>
	);
};

export default Canvas;
