import React from "react";
import styles from "./index.module.css";
const Sidebar: React.FC = () => {
	return (
		<div className={styles.flexSidebarButtons}>
			<button className={styles.itemSidebarButtons}>
				<i className={`icon-docs ${styles.sideBarFonts}`}></i>
			</button>
			<button className={styles.itemSidebarButtons}>
				<i className={`icon-docs ${styles.sideBarFonts}`}></i>
			</button>
			<button className={styles.itemSidebarButtons}>
				<i className={`icon-docs ${styles.sideBarFonts}`}></i>
			</button>
			<button className={styles.itemSidebarButtons}>
				<i className={`icon-docs ${styles.sideBarFonts}`}></i>
			</button>
			<button className={styles.itemSidebarButtons}>
				<i className={`icon-docs ${styles.sideBarFonts}`}></i>
			</button>
		</div>
	);
};

export default Sidebar;
