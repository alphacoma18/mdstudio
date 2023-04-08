import GenProfilePicture from "@/gen/image/profilePicture";
import GenLink from "@/gen/link";
import styles from "./index.module.css";
import GenLogo from "@/gen/logo";
export default () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<GenLogo
					props={{
						height: 50,
						width: 100,
					}}
					type="wideClear"
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
						props={{
							height: 50,
							width: 50,
						}}
						type="squareClear"
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
						href: "/auth/signout",
						label: "Sign out",
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
