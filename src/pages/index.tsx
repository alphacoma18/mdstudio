import ContextGlobal from "@/context/_global";
import GenLink from "@/gen/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "./_app";
import styles from "./_error.module.css";
const IndexPage: NextPageWithLayout = () => {
	const { session } = useContext(ContextGlobal);
	const router = useRouter();
	if (session) router.push("/dashboard");

	return (
		<section className={styles.section}>
			<h1>Markdown Studio</h1>
			<p>
				The modern and cross-platform blogging/note-taking/publishing platform
				using Markdown/HTML.
			</p>
			<div className={styles.container}>
				<hr />
			</div>
			<div>
				<GenLink
					props={{
						href: "/dashboard",
						label: "Navigate to dashboard",
					}}
				>
					Go to Dashboard
				</GenLink>
			</div>
			<p className={styles.credit}>
				Copyright © 2023 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma.
				All&nbsp;rights&nbsp;reserved
			</p>
		</section>
	);
};
export default IndexPage;
