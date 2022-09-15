import React, { useContext } from "react";
import GlobalContext from "../../utils/context";
import styles from "../login/index.module.css";
import Image from "next/image";
import Link from "next/link";
const ResetPassword: React.FC = () => {
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
				<h1 className={styles.header}>MyMD&nbsp;Markdown Editor&nbsp;Reset</h1>
				<hr />	
				<input
					type="email"
					className={styles.input}
					placeholder=">>> Enter Your Password"
					required
					minLength={10}
					maxLength={60}
				/>
				<input
					type="email"
					className={styles.input}
					placeholder=">>> Re-enter Your Password"
					required
					minLength={10}
					maxLength={60}
				/>

				<div className={styles.flexButtons}>
					<Link href={"/"}>
						<a className={styles.itemButtons}>Continue as Guest</a>
					</Link>
					<button type="submit" className={styles.itemButtons}>
						Reset Password and Login
					</button>
				</div>
				<hr />
			</form>
		</section>
	);
};

export default React.memo(ResetPassword);
