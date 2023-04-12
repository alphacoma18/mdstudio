import GenMeta from "@/gen/meta";
import { NextPage } from "next";
import { signOut } from "next-auth/react";
import styles from "../../_error.module.css";
const AuthSignOut: NextPage = () => {
	return (
		<>
			<section className={styles.section}>
				<GenMeta
					props={{
						title: "Sign Out",
						description: "Sign out of Markdown Studio",
					}}
				/>
				<h1>Signing out already? See you soon!</h1>
				<p> We hope you enjoyed your project publications.</p>
				<div className={styles.container}>
					<hr />
				</div>
				<div>
					<button onClick={() => signOut()}>Sign Out</button>
				</div>
				<p className={styles.credit}>
					Copyright © 2023 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma.
					All&nbsp;rights&nbsp;reserved
				</p>
			</section>
		</>
	);
};

export default AuthSignOut;
