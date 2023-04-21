import ContextEditor from "@/context/editor";
import GenButton from "@/gen/button";
import GenLink from "@/gen/link";
import GenLogo from "@/gen/logo";
import GenReload from "@/gen/reload";
import { memo, useContext } from "react";
import styles from "./index.module.css";

export default memo(() => {
	const {
		barState: { rightBarOpen },
	} = useContext(ContextEditor);
	return (
		<nav className={rightBarOpen ? styles.navOpen : styles.nav}>
			<div className={styles.desktopLogo}>
				<GenReload>
					<GenLogo
						props={{
							height: 50,
							width: 100,
						}}
						type="wideClear"
					/>
				</GenReload>
			</div>
			<div className={`${styles.flexButtons} hoverParent`}>
				<GenLink
					props={{
						href: "/dashboard",
						label: "Nav: home",
					}}
				>
					<i className={"icon-home"}></i>
					<span>Home</span>
				</GenLink>
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
});
