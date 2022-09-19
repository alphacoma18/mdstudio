import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import remarkGfm from "remark-gfm";
import GlobalContext from "../../../../utils/context";
import styles from "./index.module.css";

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
					<section
						className={`
						${isPreview && styles.previewHide}
						${styles.canvasSection}
						`}
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
					</section>
					<ScrollSyncPane>
						<div className={`
						${styles.outputMarkdown}
						${isPreview && styles.previewShow}
						`}>
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
