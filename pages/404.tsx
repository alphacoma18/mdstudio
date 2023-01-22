import GenMeta from "@/gen/meta";
import { NextPage } from "next";
import Link from "next/link";
import styles from "./_error.module.css";
const Error404: NextPage = () => {
	return (
		<section className={styles.section}>
			<GenMeta
				props={{
					title: "404 | AnyMD Markdown Publisher",
					description: "Page Not Found",
				}}
			/>
			<h1>Error 404 - Page&nbsp;Not&nbsp;Found</h1>
			<p>The page you are looking for does not exist or have moved</p>
			<div className={styles.delimit}>
				<hr />
			</div>
			<div>
				<Link href="/">Home</Link>
				<Link href="/dashboard">Dashboard</Link>
				<Link href="/editor">Editor</Link>
			</div>
			<p className={styles.credit}>
				Copyright © 2023 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma. All rights reserved
			</p>
		</section>
	);
};

export default Error404;
