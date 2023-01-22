import { useContext } from "react";
import ContextEditor from "@/context/editor";
import EditorMain from "./editor";
import styles from "./index.module.css";

const EditorCanvas: React.FC = () => {
	const {
		barState: { explorerOpen },
	} = useContext(ContextEditor);
	return (
		<span
			className={`
						${styles.canvasSection}
						${explorerOpen ? styles.canvasSectionClose : ""}
						`}
		>
			<EditorMain />
		</span>
	);
};

export default EditorCanvas;
