import ContextEditor from "@/context/editor";
import { useContext } from "react";
import { EditorMain } from "..";
import styles from "./index.module.css";

export default () => {
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
