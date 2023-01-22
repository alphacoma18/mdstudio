import { NextPage } from "next";
import Link from "next/link";
import GenMeta from "@/gen/meta";
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
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/dashboard">
					<a>Dashboard</a>
				</Link>
				<Link href="/editor">
					<a>Editor</a>
				</Link>
			</div>
			<p className={styles.credit}>
				Copyright © 2023 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma. All rights reserved
			</p>
		</section>
	);
};

export default Error500;
