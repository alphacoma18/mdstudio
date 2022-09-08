import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Resizable } from "re-resizable";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Lorem from "./lorem";
const CodeRenderer = (props: any) => {
	return (
		<SyntaxHighlighter language={props.language} style={vs2015}>
			{props.children}
		</SyntaxHighlighter>
	);
};

const Canvas: React.FC = () => {
	const [textInput, setTextInput] = useState<string>(Lorem());
	const [dimension, setDimension] = useState({ width: "50vw", height: "100%" });
	useEffect(() => {

	}, []);
	return (
		<>
			<div className={styles.inputMarkdown}>
				<Resizable
					className={styles.resizableCanvas}
					size={{ width: dimension.width, height: dimension.height }}
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
					minWidth={"15vw"}
					maxWidth={"80vw"}
					onResizeStop={(e, direction, ref, d) => {
						setDimension({
							width: dimension.width + d.width,
							height: dimension.height + d.height,
						});
					}}
				>
					<textarea
						className={styles.textarea}
						value={textInput}
						spellCheck="false"
						autoCapitalize="off"
						onChange={(e) => {
							setTextInput(e.currentTarget.value);
						}}
					></textarea>
				</Resizable>
			</div>
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
		</>
	);
};

export default Canvas;
