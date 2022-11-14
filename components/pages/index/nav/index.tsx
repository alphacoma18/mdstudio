import Link from "next/link";
import { memo, useContext } from "react";
import ContextGlobal from "../../../../utils/context/_global";
import GenLogo from "../../../gen/logo";
import styles from "./index.module.css";
interface Props {
	props: {
		rightBarOpen: boolean;
	};
}
const Nav: React.FC<Props> = ({ props: { rightBarOpen } }) => {
	const { session } = useContext(ContextGlobal);
	return (
		<nav className={rightBarOpen ? styles.navBarOpen : styles.navbar}>
			<div className={styles.desktopLogo}>
				<a href="." className="imageAnchor">
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
				</a>
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
				{session?.user ? (
					<Link href="/auth/signout">
						<a className={`icon-logout ${styles.itemButtons} ${styles.iFonts}`}>
							<span>Sign out</span>
						</a>
					</Link>
				) : (
					<Link href="/auth/signin">
						<a className={`icon-login ${styles.itemButtons} ${styles.iFonts}`}>
							<span>Sign in</span>
						</a>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default memo(Nav);
