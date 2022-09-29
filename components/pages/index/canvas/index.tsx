import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { memo } from "react";
import ReactMarkdown from "react-markdown";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import remarkGfm from "remark-gfm";
import styles from "./index.module.css";
interface Props {
	props: {
		handleTextInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
		textInput: string;
		isPreview: boolean;
		explorerOpen: boolean;
	};
}
const Canvas: React.FC<Props> = ({
	props: { handleTextInput, textInput, isPreview, explorerOpen },
}) => {
	return (
		<>
			<ScrollSync>
				<>
					<section
						className={`
						${styles.canvasSection}
						${isPreview && styles.previewHide}
						${explorerOpen && styles.explorerOpen}
						`}
					>
						<GrammarlyEditorPlugin
							clientId="client_XMZtCXSLph5ivsde6P8ckt"
							className={styles.grammarly}
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
						</GrammarlyEditorPlugin>
					</section>
					<ScrollSyncPane>
						<section
							className={`
							${styles.outputMarkdown}
							${isPreview && styles.previewShow}
							${explorerOpen && styles.explorerOpen}
						`}
						>
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								className={styles.markdown}
							>
								{textInput}
							</ReactMarkdown>
						</section>
					</ScrollSyncPane>
				</>
			</ScrollSync>
		</>
	);
};

export default memo(Canvas);
