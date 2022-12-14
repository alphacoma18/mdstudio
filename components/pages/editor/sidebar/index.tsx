import { memo, useContext } from "react";
import ContextIndex from "../../../../utils/context/index";
import ContextGlobal from "../../../../utils/context/_global";
import GenButton from "../../../gen/button";
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
					<GenButton
						props={{
							label: "Sidebar: toggle file explorer",
							onClick:
								session?.user !== undefined
									? () => updateBarState({ type: "explorerOpen" })
									: handleAlert,
						}}
					>
						<i className={"icon-docs"}></i>
					</GenButton>

					<GenButton props={{ label: "Sidebar: search" }}>
						<i className={"icon-search"}></i>
					</GenButton>

					<GenButton props={{ label: "Sidebar: save" }}>
						<i className={"icon-floppy"}></i>
					</GenButton>

					<GenButton props={{ label: "Sidebar: language" }}>
						<i className={"icon-globe"}></i>
					</GenButton>

					<GenButton props={{ label: "Sidebar: launch" }}>
						<i className={"icon-rocket"}></i>
					</GenButton>

					<GenButton props={{ label: "Sidebar: more info" }}>
						<i className={"icon-info-circled"}></i>
					</GenButton>
				</div>
				<div className={`${styles.flexButtons} hoverParent`}>
					<GenButton props={{ label: "Sidebar: profile" }}>
						{session?.user.image !== undefined ? (
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
					</GenButton>
					<GenButton
						props={{
							label: "Sidebar: toggle theme",
							onClick: () => setIsLightTheme((prev) => !prev),
						}}
					>
						{isLightTheme ? (
							<i className={"icon-toggle-off"}></i>
						) : (
							<i className={"icon-toggle-on"}></i>
						)}
					</GenButton>
					<GenButton props={{ label: "Sidebar: settings" }}>
						<i className={"icon-cog"}></i>
					</GenButton>
				</div>
			</section>
			{explorerOpen && <EditorFileExplorer />}
		</>
	);
};

export default memo(EditorSidebar);
