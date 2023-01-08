import Link from "next/link";
import { useContext } from "react";
import ContextGlobal from "../../../../utils/context/_global";
import GenProfilePicture from "../../../gen/image/profilePicture";
import GenLogo from "../../../gen/logo";
import styles from "./index.module.css";
const DashboardNav: React.FC = () => {
	const { session } = useContext(ContextGlobal);
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<a href="." className="imageAnchor">
					<GenLogo
						light={{
							src: "/logo/anymd_mobile_logo_light_2.png",
							height: 50,
							width: 50,
							alt: "AnyMD Light Theme Desktop Logo",
						}}
						dark={{
							src: "/logo/anymd_mobile_logo_dark.png",
							height: 50,
							width: 50,
							alt: "AnyMD Dark Theme Desktop Logo",
						}}
					/>
				</a>
				<svg
					data-testid="geist-icon"
					fill="none"
					height="32"
					shapeRendering="geometricPrecision"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
					viewBox="0 0 24 24"
					width="32"
				>
					<path d="M16.88 3.549L7.12 20.451"></path>
				</svg>
				<GenProfilePicture
					props={{
						isCircle: true,
						height: 40,
						width: 40,
					}}
				></GenProfilePicture>
			</div>
			<div className={`${styles.flexAnchor} hoverParent`}>
				{session?.user === undefined ? (
					<Link href={"/auth/signin"}>
						<a>
							<i className="icon-login"></i>
							<span>Login</span>
						</a>
					</Link>
				) : (
					<Link href={"/auth/signout"}>
						<a>
							<i className="icon-logout"></i>
							<span>Logout</span>
						</a>
					</Link>
				)}
				<Link href={"/"}>
					<a>
						<i className="icon-code"></i>
						<span>API</span>
					</a>
				</Link>
				<Link href={"/"}>
					<a>
						<i className="icon-pencil"></i>
						<span>Feedback</span>
					</a>
				</Link>
				<Link href={"/"}>
					<a>
						<i className="icon-doc-text-1"></i>
						<span>Changelog</span>
					</a>
				</Link>
				<Link href={"/"}>
					<a>
						<i className="icon-inbox"></i>
						<span>Inbox</span>
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
