import EditorCredits from "./credits";
import styles from "./index.module.css";

export default () => {
	return (
		<section className={styles.botbarSection}>
			<div className={styles.flexBotbar}>
				<EditorCredits />
			</div>
		</section>
	);
};
