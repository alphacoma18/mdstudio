import GenLink from "@/gen/link";
import GenMeta from "@/gen/meta";
import { NextPage } from "next";
import styles from "./_error.module.css";
const Error404: NextPage = () => {
	return (
		<section className={styles.section}>
			<GenMeta
				props={{
					title: "404 - Page Not Found",
					description: "Page Not Found",
				}}
			/>
			<h1>Error 404 - Page&nbsp;Not&nbsp;Found</h1>
			<p>The page you are looking for does not exist or have moved</p>
			<div className={styles.container}>
				<hr />
			</div>
			<div>
				<GenLink
					props={{
						href: "/",
						label: "Navigate to home page",
					}}
				>
					Home
				</GenLink>
				<GenLink
					props={{
						href: "/dashboard",
						label: "Navigate to dashboard",
					}}
				>
					Dashboard
				</GenLink>
				<GenLink
					props={{
						href: "/editor",
						label: "Navigate to editor",
					}}
				>
					Editor
				</GenLink>
			</div>
			<p className={styles.credit}>
				Copyright © 2023 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma.
				All&nbsp;rights&nbsp;reserved
			</p>
		</section>
	);
};

export default Error404;
