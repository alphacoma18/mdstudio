import Credits from "./credits";
import styles from "./index.module.css";

interface Props {
	props: {
		characterCount: number;
		wordCount: number;
	};
}
const BotBar: React.FC<Props> = ({ props: { characterCount, wordCount } }) => {
	return (
		<section className={styles.botbarSection}>
			<div className={styles.flexBotbar}>
				<Credits />
				<div className={styles.itemBotbar}>
					<span>{characterCount} Characters - </span>
					<span>{wordCount} Words</span>
					<i className="icon-bell-alt"></i>
				</div>
			</div>
		</section>
	);
};

export default BotBar;
