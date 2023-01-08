import { NextPage } from "next";
import { signOut } from "next-auth/react";
import GenMeta from "../../../components/gen/meta";
import styles from "../../_error.module.css";
const AuthSignOut: NextPage = () => {
	return (
		<>
			<section className={styles.section}>
				<GenMeta
					props={{
						title: "404 | AnyMD Markdown Publisher",
						description: "Page Not Found",
					}}
				/>
				<h1>Signing out already? See you soon!</h1>
				<p> We hope you enjoyed your project publications.</p>
				<div className={styles.delimit}>
					<hr />
				</div>
				<div>
					<button onClick={() => signOut()}>Sign Out</button>
				</div>
				<p className={styles.credit}>
					Copyright © 2023 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma. All rights
					reserved
				</p>
			</section>
		</>
	);
};

export default AuthSignOut;
