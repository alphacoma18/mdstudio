import Credits from "./credits";
import styles from "./index.module.css";

const BotBar: React.FC = () => {
	return (
		<section className={styles.botbarSection}>
			<div className={styles.flexBotbar}>
				<Credits />
			</div>
		</section>
	);
};

export default BotBar;
