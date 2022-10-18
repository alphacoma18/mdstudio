import { memo, useContext } from "react";
import GlobalContext from "../../../../utils/context";
import FileExplorer from "./fileExplorer";
import styles from "./index.module.css";

interface Props {
	props: {
		leftBarOpen: boolean;
		explorerOpen: boolean;
		handleExplorerOpen: () => void;
	};
}
const Sidebar: React.FC<Props> = ({
	props: { leftBarOpen, explorerOpen, handleExplorerOpen },
}) => {
	const { isLightTheme, handleTheme } = useContext(GlobalContext);

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
			{explorerOpen && <FileExplorer />}
		</>
	);
};

export default memo(Sidebar);
