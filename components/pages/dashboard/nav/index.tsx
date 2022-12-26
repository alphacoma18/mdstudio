import Link from "next/link";
import { useContext } from "react";
import ContextGlobal from "../../../../utils/context/_global";
import GenLogo from "../../../gen/logo";
import styles from "./index.module.css";
const DashboardNav: React.FC = () => {
	const { session } = useContext(ContextGlobal);
	return (
		<nav className={styles.nav}>
			<div className={styles.desktopLogo}>
				<a href="." className="imageAnchor">
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
				</a>
			</div>
			<div className={`${styles.flexAnchor} hoverParent`}>
				<Link href={"/editor"}>
					<a>
						<i className="icon-code"></i>
						<span>Editor</span>
					</a>
				</Link>
				{session?.user === undefined ? (
					<Link href={"/auth/signin"}>
						<a>
							<span>Login</span>
						</a>
					</Link>
				) : (
					<Link href={"/auth/signout"}>
						<a>
							<span>Logout</span>
						</a>
					</Link>
				)}
				<Link href={"/"}>
					<a>
						<span>Docs</span>
					</a>
				</Link>
				<Link href={"/"}>
					<a>
						<i className="icon-cog-alt"></i>
						<span>Settings</span>
					</a>
				</Link>
			</div>
		</nav>
	);
};

export default DashboardNav;
