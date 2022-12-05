import { memo, useContext } from "react";
import ContextIndex from "../../../../utils/context/index";
import ContextGlobal from "../../../../utils/context/_global";
import GenImage from "../../../gen/image";
import EditorFileExplorer from "./fileExplorer";
import styles from "./index.module.css";
const EditorSidebar: React.FC = () => {
	const { isLightTheme, setIsLightTheme, session } = useContext(ContextGlobal);
	const {
		barState: { leftBarOpen, explorerOpen },
		updateBarState,
	} = useContext(ContextIndex);
	function handleAlert() {
		alert(
			"Website publishing is for signed-in users only.\nYou can still publish your Markdown page anonymously."
		);
	}

	return (
		<>
			<section
				className={
					leftBarOpen ? styles.sidebarSectionOpen : styles.sidebarSection
				}
			>
				<div className={`${styles.flexButtons} hoverParent`}>
					<button
						onClick={
							session?.user
								? () => updateBarState({ type: "explorerOpen" })
								: handleAlert
						}
					>
						<i className={"icon-docs"}></i>
					</button>
					<button>
						<i className={"icon-search"}></i>
					</button>
					<button>
						<i className={"icon-floppy"}></i>
					</button>
					<button>
						<i className={"icon-globe"}></i>
					</button>
					<button>
						<i className={"icon-rocket"}></i>
					</button>
					<button>
						<i className={"icon-info-circled"}></i>
					</button>
				</div>
				<div className={`${styles.flexButtons} hoverParent`}>
					<button>
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
					<button onClick={() => setIsLightTheme((prev) => !prev)}>
						{isLightTheme ? (
							<i className={"icon-toggle-off"}></i>
						) : (
							<i className={"icon-toggle-on"}></i>
						)}
					</button>
					<button>
						<i className={"icon-cog"}></i>
					</button>
				</div>
			</section>
			{explorerOpen && <EditorFileExplorer />}
		</>
	);
};

export default memo(EditorSidebar);
