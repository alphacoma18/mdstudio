import Link from "next/link";
import { memo, useContext } from "react";
import ContextEditor from "@/context/editor";
import GenButton from "@/gen/button";
import GenLogo from "@/gen/logo";
import GenReload from "@/gen/reload";
import styles from "./index.module.css";
const EditorNav: React.FC = () => {
	const {
		barState: { rightBarOpen },
	} = useContext(ContextEditor);
	return (
		<nav className={rightBarOpen ? styles.navOpen : styles.nav}>
			<div className={styles.desktopLogo}>
				<GenReload>
					<GenLogo
						light={{
							src: "/logo/anymd_pc_logo_light.png",
							height: 50,
							width: 100,
							alt: "AnyMD Light Theme Desktop Logo",
						}}
						dark={{
							src: "/logo/anymd_pc_logo_dark.png",
							height: 50,
							width: 100,
							alt: "AnyMD Dark Theme Desktop Logo",
						}}
					/>
				</GenReload>
			</div>
			<div className={`${styles.flexButtons} hoverParent`}>
				<Link href="/dashboard">
					<a>
						<i className={"icon-home"}></i>
						<span>Home</span>
					</a>
				</Link>
				<GenButton props={{ label: "Nav: settings" }}>
					<i className={"icon-wrench"}></i>
					<span>Tools</span>
				</GenButton>
				<GenButton props={{ label: "Nav: help" }}>
					<i className={"icon-help-circled"}></i>
					<span>Help</span>
				</GenButton>
				<GenButton props={{ label: "Nav: share" }}>
					<i className={"icon-share-squared"}></i>
					<span>Share</span>
				</GenButton>
				<GenButton props={{ label: "Nav: download" }}>
					<i className={"icon-download"}></i>
					<span>Download</span>
				</GenButton>
				<GenButton props={{ label: "Nav: preview" }}>
					<i className={"icon-eye"}></i>
					<span>Preview</span>
				</GenButton>
				<GenButton props={{ label: "Nav: publish" }}>
					<i className={"icon-publish"}></i>
					<span>Publish</span>
				</GenButton>
			</div>
		</nav>
	);
};

export default memo(EditorNav);
