import EditorCredits from "./credits";
import styles from "./index.module.css";

const EditorStatusBar: React.FC = () => {
	return (
		<section className={styles.botbarSection}>
			<div className={styles.flexBotbar}>
				<EditorCredits />
			</div>
		</section>
	);
};

export default EditorStatusBar;
