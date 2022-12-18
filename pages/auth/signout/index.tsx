import { NextPage } from "next";
import { signOut } from "next-auth/react";
import GenLogo from "../../../components/gen/logo";
import styles from "../index.module.css";
const SignOut: NextPage = () => {
	return (
		<section className={styles.bg}>
			<div className={styles.flexDiv}>
				<span className={styles.spanImage}>
					<GenLogo
						light={{
							src: "/logo/anymd_pc_logo_light.png",
							height: 80,
							width: 160,
							alt: "AnyMD Light Theme Desktop Logo",
						}}
						dark={{
							src: "/logo/anymd_pc_logo_dark.png",
							height: 80,
							width: 160,
							alt: "AnyMD Dark Theme Desktop Logo",
						}}
					/>
				</span>
				<hr />
				<button
					onClick={async () => await signOut()}
					className={styles.signout}
				>
					Sign Out
				</button>
				<hr />
				<p>Signing out already? See you soon!</p>
				<p>We hope you enjoyed your project publications.</p>
			</div>
		</section>
	);
};
export default SignOut;
