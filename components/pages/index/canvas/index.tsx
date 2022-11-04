import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import dynamic from "next/dynamic";
import { memo, useContext } from "react";
import rehypeSanitize from "rehype-sanitize";
import ContextGlobal from "../../../../utils/context";
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
	const { isMobile } = useContext(ContextGlobal);
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
						config={{
							activation: "immediate",
							introText: "AnyMD is integrated with Grammarly!",
						}}
					>
						<MDEditor
							height={"100%"}
							value={textInput}
							onChange={handleTextInput}
							preview={isMobile ? "edit" : "live"}
							className={`${styles.editor} kf-fade-in-fast`}
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
