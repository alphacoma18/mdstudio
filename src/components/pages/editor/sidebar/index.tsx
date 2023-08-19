import ContextGlobal from "@/context/_global";
import ContextEditor from "@/context/editor";
import GenButton from "@/gen/button";
import GenProfilePicture from "@/gen/image/profilePicture";
import { memo, useContext } from "react";
import { EditorFileExplorer } from "..";
import styles from "./index.module.css";
export default memo(() => {
	const { isLightTheme, setIsLightTheme } = useContext(ContextGlobal);
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
							onClick: () => updateBarState({ type: "explorerOpen" }),
						}}
					>
						<i className={"icon-docs"}></i>
					</GenButton>

					<GenButton props={{ label: "Sidebar: search" }}>
						<i className={"icon-search"}></i>
					</GenButton>

					<GenButton
						props={{
							label: "Sidebar: save",
							onClick: () => {},
						}}
					>
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
						<GenProfilePicture
							props={{
								height: 40,
								width: 40,
							}}
							isCircle={true}
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
						<i className={"icon-cog-alt"}></i>
					</GenButton>
				</div>
			</section>
			{explorerOpen && <EditorFileExplorer />}
		</>
	);
});
