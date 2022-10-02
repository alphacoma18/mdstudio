import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import dynamic from "next/dynamic";
import { memo } from "react";
import styles from "./index.module.css";
const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
	ssr: false,
});
interface Props {
	props: {
		handleTextInput: (e: string) => void;
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
				<GrammarlyEditorPlugin
					clientId="client_XMZtCXSLph5ivsde6P8ckt"
					className={styles.grammarly}
				>
					{/* <textarea onChange={handleTextInput} value={textInput}></textarea> */}
					<SimpleMdeEditor
						inputMode="text"
						className={styles.editor}
						value={textInput}
						onChange={handleTextInput}
					/>
				</GrammarlyEditorPlugin>
			</section>
		</>
	);
};

export default memo(Canvas);
