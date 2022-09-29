import Link from "next/link";
import { memo, useContext } from "react";
import GlobalContext from "../../../../utils/context";
import GenImage from "../../../gen/image";
import styles from "./index.module.css";

interface Props {
	props: {
		rightBarOpen: boolean;
		handleIsPreview: () => void;
	};
}
const Nav: React.FC<Props> = ({ props: { rightBarOpen, handleIsPreview } }) => {
	const { isLightTheme } = useContext(GlobalContext);
	return (
		<nav className={rightBarOpen ? styles.navBarOpen : styles.navbar}>
			<div className={styles.desktopLogo}>
				{isLightTheme ? (
					<a href="." className="imageAnchor">
						<GenImage
							src="/logo/mymd_pc_logo_light.png"
							height={50}
							width={100}
							alt="MyMD Light Theme Desktop Logo"
						/>
					</a>
				) : (
					<a href="." className="imageAnchor">
						<GenImage
							src="/logo/mymd_pc_logo_dark.png"
							height={50}
							width={100}
							alt="MyMD Dark Theme Desktop Logo"
						/>
					</a>
				)}
			</div>
			<div className={styles.flexNavButton}>
				<button className={styles.itemNavButtons}>
					<a href="#">
						<i className={`icon-home ${styles.iFonts}`}></i>
						<span>Home</span>
					</a>
				</button>
				<button className={styles.itemNavButtons}>
					<i className={`icon-wrench ${styles.iFonts}`}></i>
					<span>Tools</span>
				</button>
				<button className={styles.itemNavButtons}>
					<i className={`icon-help-circled ${styles.iFonts}`}></i>
					<span>Help</span>
				</button>
				<button className={styles.itemNavButtons}>
					<i className={`icon-share-squared ${styles.iFonts}`}></i>
					<span>Share</span>
				</button>
				<button className={styles.itemNavButtons}>
					<i className={`icon-download ${styles.iFonts}`}></i>
					<span>Download</span>
				</button>
				<button className={styles.itemNavButtons} onClick={handleIsPreview}>
					<i className={`icon-eye ${styles.iFonts}`}></i>
					<span>Preview</span>
				</button>
				<button className={styles.itemNavButtons}>
					<i className={`icon-publish ${styles.iFonts}"`}></i>
					<span>Publish</span>
				</button>
				<button className={styles.itemNavButtons}>
					<Link href="/login">
						<a>
							<i className={`icon-login ${styles.iFonts}`}></i>
							<span>Login/Signup</span>
						</a>
					</Link>
				</button>
			</div>
		</nav>
	);
};

export default memo(Nav);
