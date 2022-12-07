import { useContext } from "react";
import ContextIndex from "../../../../utils/context/index";
import EditorMain from "./editor";
import styles from "./index.module.css";

const EditorCanvas: React.FC = () => {
	const {
		barState: { explorerOpen },
	} = useContext(ContextIndex);
	return (
		<>
			<span
				className={`
						${styles.canvasSection}
						${explorerOpen && styles.canvasSectionClose}
						`}
			>
				<EditorMain />
			</span>
		</>
	);
};

export default EditorCanvas;
