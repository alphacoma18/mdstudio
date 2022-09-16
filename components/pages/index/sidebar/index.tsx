import React, { useState, useContext } from "react";
import styles from "./index.module.css";
import FileExplorer from "./fileExplorer";
import GlobalContext from "../../../../utils/context";
const Sidebar: React.FC = () => {
	const {
		isLightTheme,
		handleTheme,
		leftBarOpen,
		explorerOpen,
		handleExplorerOpen,
	} = useContext(GlobalContext);

	return (
		<>
			<section
				className={
					leftBarOpen ? styles.sidebarSectionOpen : styles.sidebarSection
				}
			>
				<div className={styles.flexButtons}>
					<button className={styles.itemButtons} onClick={handleExplorerOpen}>
						<i className={`icon-docs ${styles.iFonts}`}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={`icon-floppy ${styles.iFonts}`}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={`icon-globe ${styles.iFonts}`}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={`icon-rocket ${styles.iFonts}`}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={`icon-info-circled ${styles.iFonts}`}></i>
					</button>
				</div>
				<div className={styles.flexButtons}>
					<button className={styles.itemButtons}>
						<i className={`icon-user-circle ${styles.iFonts}`}></i>
					</button>
					<button className={styles.itemButtons} onClick={handleTheme}>
						{isLightTheme ? (
							<i className={`icon-toggle-off ${styles.iFonts}`}></i>
						) : (
							<i className={`icon-toggle-on ${styles.iFonts}`}></i>
						)}
					</button>
				</div>
			</section>

			<>{explorerOpen && <FileExplorer />}</>
		</>
	);
};

export default React.memo(Sidebar);
