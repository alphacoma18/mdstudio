import { NextPage } from "next";
import { signOut } from "next-auth/react";
import styles from "./index.module.css";

const SignOut: NextPage = () => {
	return (
		<section className={styles.section}>
			<button onClick={() => signOut()}>Sign Out</button>
		</section>
	);
};
export default SignOut;
