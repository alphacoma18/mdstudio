import React, { useContext } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import GlobalContext from "../../utils/context";
import Link from "next/link";
interface Props {
	props: {
		handleIsPreview: () => void;
	};
}
const Nav: React.FC<Props> = ({ props: { handleIsPreview } }) => {
	const { rightBarOpen, isLightTheme } = useContext(GlobalContext);
	return (
		<nav className={rightBarOpen ? styles.navBarOpen : styles.navbar}>
			<div className={styles.desktopLogo}>
				{isLightTheme ? (
					<a href=".">
						<Image
							src={"/logo/mymd_pc_logo_light.png"}
							height={50}
							width={100}
							alt="MyMD Light Theme Desktop Logo"
						/>
					</a>
				) : (
					<a href=".">
						<Image
							src={"/logo/mymd_pc_logo_dark.png"}
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

export default React.memo(Nav);
