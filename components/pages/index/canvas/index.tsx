import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import dynamic from "next/dynamic";
import { memo } from "react";
import rehypeSanitize from "rehype-sanitize";
import styles from "./index.module.css";
const MDEditor = dynamic(
	() => import("@uiw/react-md-editor").then((mod) => mod.default),
	{ ssr: false }
);
interface Props {
	props: {
		handleTextInput: (text: any) => void;
		textInput: string;
		explorerOpen: boolean;
	};
}
const Canvas: React.FC<Props> = ({
	props: { handleTextInput, textInput, explorerOpen },
}) => {
	return (
		<>
			<section
				className={`
						${styles.canvasSection}
						${explorerOpen && styles.explorerOpen}
						`}
			>
				<div className={styles.dataColorMode}>
					<GrammarlyEditorPlugin
						clientId="client_XMZtCXSLph5ivsde6P8ckt"
						className={styles.grammarly}
					>
						<MDEditor
							height={"100%"}
							value={textInput}
							onChange={handleTextInput}
							className={styles.editor}
							previewOptions={{
								rehypePlugins: [rehypeSanitize],
							}}
						/>
					</GrammarlyEditorPlugin>
				</div>
			</section>
		</>
	);
};

export default memo(Canvas);
