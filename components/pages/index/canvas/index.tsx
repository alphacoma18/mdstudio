import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { memo, useContext } from "react";
import GlobalContext from "../../../../utils/context";
import styles from "./index.module.css";

import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(
	() => import("@uiw/react-md-editor").then((mod) => mod.default),
	{ ssr: false }
);
interface Props {
	props: {
		handleTextInput: (e: any) => void;
		textInput: string;
		explorerOpen: boolean;
	};
}
const Canvas: React.FC<Props> = ({
	props: { handleTextInput, textInput, explorerOpen },
}) => {

	const { isLightTheme } = useContext(GlobalContext);
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
					<div data-color-mode={isLightTheme ? "light" : "dark"} className={styles.dataColorMode}>
						<MDEditor height={"100%"} value={textInput} onChange={handleTextInput} style={{height: "100%"}} />
					</div>
				</GrammarlyEditorPlugin>
			</section>
		</>
	);
};

export default memo(Canvas);
