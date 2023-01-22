import { NextPage } from "next";
import GenMeta from "@/gen/meta";
import styles from "./_error.module.css";
const Fallback: NextPage = () => {
	return (
		<>
			<GenMeta
				props={{
					title: "Offline | AnyMD Markdown Publisher",
					description: "Went offline while loading the page...",
				}}
			/>
			<section className={styles.section}>
				<h1>Went offline while loading the page...</h1>
				<p>Please check your internet connection</p>
				<p>AnyMD will automatically reload the page when you go online!</p>
				<p className={styles.credit}>
					Copyright © 2023 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma. All rights
					reserved
				</p>
			</section>
		</>
	);
};

export default Fallback;
