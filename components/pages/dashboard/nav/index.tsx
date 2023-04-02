import GenProfilePicture from "@/gen/image/profilePicture";
import GenLink from "@/gen/link";
import GenLogo from "@/gen/logo";
import styles from "./index.module.css";
export default () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
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
						className: "mobileOnly",
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
