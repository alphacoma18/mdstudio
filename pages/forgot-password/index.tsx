import React, { useContext } from "react";
import styles from "../login/index.module.css";
import styles2 from "./index.module.css";
import Image from "next/image";
import GlobalContext from "../../utils/context";
import Link from "next/link";
const Verify: React.FC = () => {
	const { isLightTheme } = useContext(GlobalContext);
	return (
		<section className={styles.bg}>
			<form className={styles.form}>
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
			</form>
		</section>
	);
};

export default React.memo(Verify);
