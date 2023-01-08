import { memo, useContext } from "react";
import ContextGlobal from "../../../../utils/context/_global";
import ContextEditor from "../../../../utils/context/editor/index";
import GenButton from "../../../gen/button";
import GenProfilePicture from "../../../gen/image/profilePicture";
import EditorFileExplorer from "./fileExplorer";
import styles from "./index.module.css";
function handleAlert() {
	alert(
		"Website publishing is for signed-in users only.\nYou can still publish your Markdown page anonymously."
	);
}
const EditorSidebar: React.FC = () => {
	const { isLightTheme, setIsLightTheme, session } = useContext(ContextGlobal);
	const {
		barState: { leftBarOpen, explorerOpen },
		updateBarState,
	} = useContext(ContextEditor);

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
								// session?.user === undefined
								// 	? handleAlert
								() => updateBarState({ type: "explorerOpen" }),
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

					{/* TODO: add inline-css converter since html + css can be parsed */}

					{/* <Link href="/inline-css">
						<a>
							<i className={"icon-info-circled"}></i>
						</a>
					</Link> */}
				</div>
				<div className={`${styles.flexButtons} hoverParent`}>
					<GenButton props={{ label: "Sidebar: profile" }}>
						<GenProfilePicture
							props={{
								isCircle: true,
								height: 40,
								width: 40,
							}}
						></GenProfilePicture>
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
