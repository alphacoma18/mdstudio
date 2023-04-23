import GenProfilePicture from "@/gen/image/profilePicture";
import GenLink, { ILink } from "@/gen/link";
import GenLogo from "@/gen/logo";
import styles from "./index.module.css";
const links: ILink[] = [
	{
		props: {
			href: "/",
			label: "Navigate to home page",
		},
		children: (
			<>
				<i className="icon-home"></i>
				<span>Home</span>
			</>
		),
	},
	{
		props: {
			href: "/dashboard",
			label: "Navigate to dashboard",
		},
		children: (
			<>
				<i className="icon-code"></i>
				<span>Dashboard</span>
			</>
		),
	},
	{
		props: {
			href: "/",
			label: "Navigate to home page",
			className: "mobileOnly",
		},
		children: (
			<GenLogo
				props={{
					height: 50,
					width: 50,
				}}
				type="squareClear"
			/>
		),
	},
	{
		props: {
			href: "/",
			label: "Navigate to home page",
			className: "mobileOnly",
		},
		children: (
			<GenProfilePicture
				props={{
					height: 50,
					width: 50,
				}}
			/>
		),
	},
	{
		props: {
			href: "/",
			label: "Navigate to inbox",
		},
		children: (
			<>
				<i className="icon-inbox"></i>
				<span>Inbox</span>
			</>
		),
	},
	{
		props: {
			href: "/auth/signout",
			label: "Sign out",
		},
		children: (
			<GenProfilePicture
				props={{
					height: 40,
					width: 40,
				}}
				isCircle={true}
			/>
		),
	},
];
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
				{links.map((link, index) => {
					return (
						<GenLink key={index} props={link.props}>
							{link.children}
						</GenLink>
					);
				})}
			</div>
		</nav>
	);
};
