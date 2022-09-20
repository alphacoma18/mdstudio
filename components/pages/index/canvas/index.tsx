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
						${styles.canvasSection}
						${isPreview && styles.previewHide}
						${explorerOpen && styles.explorerOpen}
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

export default Canvas;
