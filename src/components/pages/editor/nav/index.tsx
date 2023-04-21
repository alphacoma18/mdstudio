import ContextEditor from "@/context/editor";
import GenButton, { IButton } from "@/gen/button";
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
				{buttons.map((button, index) => (
					<GenButton key={index} props={button.props}>
						{button.children}
					</GenButton>
				))}
			</div>
		</nav>
	);
});

const buttons: IButton[] = [
	{
		props: {
			label: "Nav: settings",
		},
		children: (
			<>
				<i className="icon-wrench"></i>
				<span>Tools</span>
			</>
		),
	},
	{
		props: {
			label: "Nav: help",
		},
		children: (
			<>
				<i className="icon-help-circled"></i>
				<span>Help</span>
			</>
		),
	},
	{
		props: {
			label: "Nav: share",
		},
		children: (
			<>
				<i className="icon-share-squared"></i>
				<span>Share</span>
			</>
		),
	},
	{
		props: {
			label: "Nav: download",
		},
		children: (
			<>
				<i className="icon-download"></i>
				<span>Download</span>
			</>
		),
	},
	{
		props: {
			label: "Nav: preview",
		},
		children: (
			<>
				<i className="icon-eye"></i>
				<span>Preview</span>
			</>
		),
	},
	{
		props: {
			label: "Nav: publish",
		},
		children: (
			<>
				<i className="icon-publish"></i>
				<span>Publish</span>
			</>
		),
	},
];
