import React from "react";
import styles from "./index.module.css";
const Sidebar: React.FC = () => {
	return (
		<div className={styles.sidebar}>
			<button className={styles.sideBarButtons}>
				<i className={`icon-docs ${styles.sideBarFonts}`}></i>
			</button>
			<button className={styles.sideBarButtons}>
				<i className={`icon-docs ${styles.sideBarFonts}`}></i>
			</button>
			<button className={styles.sideBarButtons}>
				<i className={`icon-docs ${styles.sideBarFonts}`}></i>
			</button>
			<button className={styles.sideBarButtons}>
				<i className={`icon-docs ${styles.sideBarFonts}`}></i>
			</button>
			<button className={styles.sideBarButtons}>
				<i className={`icon-docs ${styles.sideBarFonts}`}></i>
			</button>
		</div>
	);
};

export default Sidebar;
