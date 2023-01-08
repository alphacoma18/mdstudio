import styles from "./index.module.css";

const EditorCredits: React.FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.flexItem}>
				<span className={styles.version}>
					<i className="icon-rocket"></i>
					{/* Version: Dev */}
				</span>
				<span className={styles.credits}>
					<i className="icon-certificate"></i>
					{/* Copyright © 2023 Alpha Romer N. Coma. All rights reserved. */}
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
