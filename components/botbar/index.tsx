import React, { useContext } from "react";
import GlobalContext from "../../utils/context";
import styles from "./index.module.css";
import Credits from "./credits";
const BotBar: React.FC = () => {
	const { characterCount, wordCount } = useContext(GlobalContext);
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
