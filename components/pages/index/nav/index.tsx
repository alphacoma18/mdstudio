import Link from "next/link";
import { memo, useContext } from "react";
import axios from "../../../../utils/axios";
import ContextGlobal from "../../../../utils/context";
import GenImage from "../../../gen/image";
import styles from "./index.module.css";
interface Props {
	props: {
		rightBarOpen: boolean;
	};
}
const Nav: React.FC<Props> = ({ props: { rightBarOpen } }) => {
	const { user, isLightTheme } = useContext(ContextGlobal);

	async function handleLogout() {
		try {
			await axios.post("/logout");
			window.location.reload();
		} catch (err: any) {
			window.location.reload();
		}
	}
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
			<div className={styles.flexButtons}>
				<Link href="#">
					<a className={styles.itemButtons}>
						<i className={`icon-home ${styles.iFonts}`}></i>
						<span>Home</span>
					</a>
				</Link>
				<button className={styles.itemButtons}>
					<i className={`icon-wrench ${styles.iFonts}`}></i>
					<span>Tools</span>
				</button>
				<button className={styles.itemButtons}>
					<i className={`icon-help-circled ${styles.iFonts}`}></i>
					<span>Help</span>
				</button>
				<button className={styles.itemButtons}>
					<i className={`icon-share-squared ${styles.iFonts}`}></i>
					<span>Share</span>
				</button>
				<button className={styles.itemButtons}>
					<i className={`icon-download ${styles.iFonts}`}></i>
					<span>Download</span>
				</button>
				<button className={styles.itemButtons}>
					<i className={`icon-eye ${styles.iFonts}`}></i>
					<span>Preview</span>
				</button>
				<button className={styles.itemButtons}>
					<i className={`icon-publish ${styles.iFonts}`}></i>
					<span>Publish</span>
				</button>
				{user._id ? (
					<button className={styles.itemButtons} onClick={handleLogout}>
						<i className={`icon-logout ${styles.iFonts}`}></i>
						<span>Logout</span>
					</button>
				) : (
					<Link href="/login">
						<a className={styles.itemButtons}>
							<i className={`icon-login ${styles.iFonts}`}></i>
							<span>Login/Signup</span>
						</a>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default memo(Nav);
