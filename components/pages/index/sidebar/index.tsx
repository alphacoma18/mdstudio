import { memo, useContext } from "react";
import ContextGlobal from "../../../../utils/context/_global";
import GenImage from "../../../gen/image";
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
	const { isLightTheme, setIsLightTheme, session } = useContext(ContextGlobal);
	function handleAlert() {
		alert(
			"Website publishing is for signed-in users only.\nYou can still publish your Markdown page anonymously."
		);
	}
	console.log(session);

	return (
		<>
			<section
				className={
					leftBarOpen ? styles.sidebarSectionOpen : styles.sidebarSection
				}
			>
				<div className={`${styles.flexButtons} hoverParent`}>
					<button
						className={styles.itemButtons}
						onClick={session?.user ? handleExplorerOpen : handleAlert}
					>
						<i className={"icon-docs"}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={"icon-search"}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={"icon-floppy"}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={"icon-globe"}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={"icon-rocket"}></i>
					</button>
					<button className={styles.itemButtons}>
						<i className={"icon-info-circled"}></i>
					</button>
				</div>
				<div className={`${styles.flexButtons} hoverParent`}>
					<button className={styles.itemButtons}>
						{session?.user.image ? (
							<GenImage
								props={{
									src: session.user.image,
									height: 40,
									width: 40,
									alt: session.user.name,
									className: styles.profileImage,
								}}
							/>
						) : (
							<i className={"icon-user-circle"}></i>
						)}
					</button>
					<button
						className={styles.itemButtons}
						onClick={() => setIsLightTheme((prev) => !prev)}
					>
						{isLightTheme ? (
							<i className={"icon-toggle-off"}></i>
						) : (
							<i className={"icon-toggle-on"}></i>
						)}
					</button>
					<button className={styles.itemButtons}>
						<i className={"icon-cog"}></i>
					</button>
				</div>
			</section>
			{explorerOpen && <FileExplorer />}
		</>
	);
};

export default memo(Sidebar);
