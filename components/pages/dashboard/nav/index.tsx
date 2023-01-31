import GenProfilePicture from "@/gen/image/profilePicture";
import GenLogo from "@/gen/logo";
// import GenLink from "next/GenLink";
import GenLink from "@/gen/link";
import styles from "./index.module.css";
const DashboardNav: React.FC = () => {
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
				<GenLink
					props={{
						href: "/",
						label: "Navigate to home page",
					}}
				>
					<i className="icon-home"></i>
					<span>Home</span>
				</GenLink>
				<GenLink
					props={{
						href: "/dashboard",
						label: "Navigate to dashboard",
					}}
				>
					<i className="icon-code"></i>
					<span>Dashboard</span>
				</GenLink>
				<GenLink
					props={{
						href: "/",
						label: "Navigate to home page",
						className: "omitMobile",
					}}
				>
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
				</GenLink>
				<GenLink
					props={{
						href: "/",
						label: "Navigate to inbox",
					}}
				>
					<i className="icon-inbox"></i>
					<span>Inbox</span>
				</GenLink>
				<GenLink
					props={{
						href: "/",
						label: "Navigate to help page",
					}}
				>
					<i className="icon-help-circled"></i>
					<span>Help</span>
				</GenLink>
				<GenLink
					props={{
						href: "/",
						label: "Navigate to settings page",
					}}
				>
					<i className="icon-cog-alt"></i>
					<span>Settings</span>
				</GenLink>
				<GenLink
					props={{
						href: "/",
						label: "Navigate to profile page",
					}}
				>
					<GenProfilePicture
						props={{
							isCircle: true,
							height: 40,
							width: 40,
						}}
					></GenProfilePicture>
				</GenLink>
			</div>
		</nav>
	);
};

export default DashboardNav;
