import React, { useState } from "react";
import styles from "./index.module.css";
import FileExplorer from "./fileExplorer";
const Sidebar: React.FC = () => {
	const [fileExplorerOpen, setFileExplorerOpen] = useState<boolean>(false);
	function handleFileExplorer() {
		setFileExplorerOpen((prev) => !prev);
	}
	return (
		<>
			<section className={styles.sidebarSection}>
				<div className={styles.flexSidebarButtons}>
					<button
						className={styles.itemSidebarButtons}
						onClick={handleFileExplorer}
					>
						<i className={`icon-docs ${styles.sideBarFonts}`}></i>
					</button>
					<button className={styles.itemSidebarButtons}>
						<i className={`icon-floppy ${styles.sideBarFonts}`}></i>
					</button>
					<button className={styles.itemSidebarButtons}>
						<i className={`icon-globe ${styles.sideBarFonts}`}></i>
					</button>
					<button className={styles.itemSidebarButtons}>
						<i className={`icon-docs ${styles.sideBarFonts}`}></i>
					</button>
					<button className={styles.itemSidebarButtons}>
						<i className={`icon-docs ${styles.sideBarFonts}`}></i>
					</button>
				</div>
				<div className={styles.flexSidebarButtons}>
					<button className={styles.itemSidebarButtons}>
						<i className={`icon-user-circle ${styles.sideBarFonts}`}></i>
					</button>
					<button className={styles.itemSidebarButtons}>
						<i className={`icon-toggle-off ${styles.sideBarFonts}`}></i>
					</button>
				</div>
			</section>

			<>{fileExplorerOpen && <FileExplorer />}</>
		</>
	);
};

export default Sidebar;
