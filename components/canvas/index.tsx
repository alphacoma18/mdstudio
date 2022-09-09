import React, { useState, useContext } from "react";
import styles from "./index.module.css";
import GlobalContext from "../../utils/context";
import { Resizable } from "re-resizable";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import { githubGist } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Lorem from "./lorem";
const CodeRenderer = (props: any) => {
	return (
		<SyntaxHighlighter language={props.language} style={githubGist}>
			{props.children}
		</SyntaxHighlighter>
	);
};

const Canvas: React.FC = () => {
	const { handleCount } = useContext(GlobalContext);
	const [textInput, setTextInput] = useState<string>(Lorem());
	return (
		<>
			<ScrollSync>
				<>
					<Resizable
						className={styles.resizableCanvas}
						defaultSize={{
							width: "50vw",
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
								autoCapitalize="none"
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
								components={{
									code: ({ node, ...props }) => <CodeRenderer {...props} />,
								}}
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
