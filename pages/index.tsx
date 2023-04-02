import ContextGlobal from "@/context/_global";
import GenLink from "@/gen/link";
import { useContext } from "react";
import { NextPageWithLayout } from "./_app";
import styles from "./_error.module.css";
const IndexPage: NextPageWithLayout = () => {
	const { session } = useContext(ContextGlobal);
	return (
		<section className={styles.section}>
			<h1>AnyMD: Markdown Publisher</h1>
			<p>
				A modern, customizable, and cross-platform no-code website
				builder/publisher.
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
				{/* {
					session ? (<GenLink
						props={{
							href: "/dashboard",
							label: "Navigate to dashboard",
						}}
					>
						Go to Dashboard
					</GenLink>
					) : (<>
							<GenLink props={{
								
							}}>
								Create Anonymous Markdown
							</GenLink>
					</>)
				} */}
			</div>
			<p className={styles.credit}>
				Copyright © 2023 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma.
				All&nbsp;rights&nbsp;reserved
			</p>
		</section>
	);
};
export default IndexPage;
