import ContextEditor from "@/context/editor";
import { useContext } from "react";
import styles from "./index.module.css";
const EditorCredits: React.FC = () => {
	const { editorState, projectState } = useContext(ContextEditor);
	return (
		<section className={styles.section}>
			<div className={styles.flexItem}>
				<span>
					<code className={styles.path}>
						<i className="icon-rocket"></i>
						{projectState.projectName}
						<i className="icon-doc-text"></i>
						{editorState.name}
					</code>
				</span>
				<span className={styles.credits}>
					{/* <i className="icon-certificate"></i> */}
				</span>
			</div>
			<div className={styles.flexItem}>
				<i className="icon-expeditedssl"></i>
				<i className="icon-bell-alt"></i>
			</div>
		</section>
	);
};

export default EditorCredits;
