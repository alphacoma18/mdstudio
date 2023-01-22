import GenMeta from "@/gen/meta";
import { NextPage } from "next";
import Link from "next/link";
import styles from "./_error.module.css";
const Error500: NextPage = () => {
	return (
		<section className={styles.section}>
			<GenMeta
				props={{
					title: "500 | AnyMD Markdown Publisher",
					description: "Internal Server Error",
				}}
			/>
			<h1>Error 500 - Internal&nbsp;Server&nbsp;Error</h1>
			<p>
				The server encountered an internal error and was unable to complete your
				request.
			</p>
			<div className={styles.delimit}>
				<hr />
			</div>
			<div>
				<Link href="/">Home</Link>
				<Link href="/dashboard">Dashboard</Link>
				<Link href="/editor">Editor</Link>
			</div>
			<p className={styles.credit}>
				Copyright © 2023 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma.
				All&nbsp;rights&nbsp;reserved
			</p>
		</section>
	);
};

export default Error500;
