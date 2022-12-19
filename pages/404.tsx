import { NextPage } from "next";
import Link from "next/link";
import GenMeta from "../components/gen/meta";
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
				MIT License Copyright (c) 2022 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma
			</p>
		</section>
	);
};

export default Error404;
