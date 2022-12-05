import Link from "next/link";
import { memo, useContext } from "react";
import ContextIndex from "../../../../utils/context/index";
import GenLogo from "../../../gen/logo";
import GenReload from "../../../gen/reload";
import styles from "./index.module.css";

const EditorNav: React.FC = () => {
	const {
		barState: { rightBarOpen },
	} = useContext(ContextIndex);
	return (
		<nav className={rightBarOpen ? styles.navOpen : styles.nav}>
			<div className={styles.desktopLogo}>
				<GenReload>
					<GenLogo
						logoLight={{
							src: "/logo/anymd_pc_logo_light.png",
							height: 50,
							width: 100,
							alt: "AnyMD Light Theme Desktop Logo",
						}}
						logoDark={{
							src: "/logo/anymd_pc_logo_dark.png",
							height: 50,
							width: 100,
							alt: "AnyMD Dark Theme Desktop Logo",
						}}
					/>
				</GenReload>
			</div>
			<div className={`${styles.flexButtons} hoverParent`}>
				<Link href="/">
					<a>
						<i className={"icon-home"}></i>
						<span>Home</span>
					</a>
				</Link>
				<button>
					<i className={"icon-wrench"}></i>
					<span>Tools</span>
				</button>
				<button>
					<i className={"icon-help-circled"}></i>
					<span>Help</span>
				</button>
				<button>
					<i className={"icon-share-squared"}></i>
					<span>Share</span>
				</button>
				<button>
					<i className={"icon-download"}></i>
					<span>Download</span>
				</button>
				<button>
					<i className={"icon-eye"}></i>
					<span>Preview</span>
				</button>
				<button>
					<i className={"icon-publish"}></i>
					<span>Publish</span>
				</button>
			</div>
		</nav>
	);
};

export default memo(EditorNav);
