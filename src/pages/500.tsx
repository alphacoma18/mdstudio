import GenLink from "@/gen/link";
import GenMeta from "@/gen/meta";
import { NextPage } from "next";
import styles from "./_error.module.css";
const Error500: NextPage = () => {
	return (
		<section className={styles.section}>
			<GenMeta
				props={{
					title: "500 Server Error",
					description: "Internal Server Error",
				}}
			/>
			<h1>Error 500 - Internal&nbsp;Server&nbsp;Error</h1>
			<p>
				The server encountered an internal error and was unable to complete your
				request.
			</p>
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

export default Error500;
