import React, { useState, useContext } from "react";
import styles from "../login/index.module.css";
import styles2 from "./index.module.css";
import Image from "next/image";
import GlobalContext from "../../utils/context";
import Link from "next/link";
import axios from "../../utils/axios";
const Verify: React.FC = () => {
	const { isLightTheme } = useContext(GlobalContext);
	const [email, setEmail] = useState<string>("");

	async function handleSubmit() {
		try {
			await axios.post("/api/forgot-password", {
				email,
			});
		} catch (e) {}
	}
	return (
		<section className={styles.bg}>
			<form className={styles.form} onSubmit={handleSubmit}>
				{isLightTheme ? (
					<Image
						src={"/logo/mymd_pc_logo_light.png"}
						height={80}
						width={160}
					></Image>
				) : (
					<Image
						src={"/logo/mymd_pc_logo_dark.png"}
						height={80}
						width={160}
					></Image>
				)}
				<h1 className={styles.header}>
					MyMD&nbsp;Markdown Editor&nbsp;Recover
				</h1>
				<hr />
				<input
					type="email"
					className={styles.input}
					placeholder=">>> Enter Your Email Address"
					required
					minLength={10}
					maxLength={60}
					pattern="^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$"
					onChange={(e) => setEmail(e.currentTarget.value)}
					value={email}
				/>
				<div className={styles.flexButtons}>
					<Link href={"/login"}>
						<a className={styles.itemButtons}>Back to Login</a>
					</Link>
					<button type="submit" className={styles.itemButtons}>
						Send Recovery Link
					</button>
				</div>
				<hr />
				<details className={styles2.howToRecover}>
					<summary>How To Recover?</summary>
					We will send a recovery link to the email you enter. You may then open
					it and click the specified link that will redirect you back to the
					application and allow you to reset your password.
				</details>
			</form>
		</section>
	);
};

export default React.memo(Verify);
