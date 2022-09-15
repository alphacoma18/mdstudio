import React, { useState, useContext } from "react";
import styles from "./index.module.css";
import GlobalContext from "../../utils/context";
import { Resizable } from "re-resizable";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

interface Props {
	props: {
		handleTextInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
		textInput: string;
		isPreview: boolean;
	};
}
const Canvas: React.FC<Props> = ({
	props: { handleTextInput, textInput, isPreview },
}) => {
	const { explorerOpen } = useContext(GlobalContext);
	return (
		<>
			<ScrollSync>
				<>
					<Resizable
						className={`
						${isPreview && styles.isPreview}
						${explorerOpen ? styles.resizableOpen : styles.resizableCanvas}
						`}
						defaultSize={{
							width: "45vw",
							height: "auto",
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
								onChange={handleTextInput}
							></textarea>
						</ScrollSyncPane>
					</Resizable>
					<ScrollSyncPane>
						<div
							className={`
						${isPreview && styles.isPreviewShow}
						${styles.outputMarkdown}`}
						>
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
