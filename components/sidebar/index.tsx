import React, { useState, useContext } from "react";
import styles from "./index.module.css";
import FileExplorer from "./fileExplorer";
import GlobalContext from "../../utils/context";
const Sidebar: React.FC = () => {
	const { isLightTheme, handleTheme } = useContext(GlobalContext);
	const [fileExplorerOpen, setFileExplorerOpen] = useState<boolean>(false);
	function handleFileExplorer() {
		setFileExplorerOpen((prev) => !prev);
	}
	return (
		<>
			<section className={styles.sidebarSection}>
				<div className={styles.flexButtons}>
					<button
						className={styles.itemButtons}
						onClick={handleFileExplorer}
					>
						<i className={`icon-docs ${styles.iFonts}`}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={`icon-floppy ${styles.iFonts}`}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={`icon-globe ${styles.iFonts}`}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={`icon-docs ${styles.iFonts}`}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={`icon-docs ${styles.iFonts}`}></i>
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

			<>{fileExplorerOpen && <FileExplorer />}</>
		</>
	);
};

export default Sidebar;
