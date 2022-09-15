import React, { useContext, useState } from "react";
import GlobalContext from "../../utils/context";
import styles from "../login/index.module.css";
import Image from "next/image";
import axios from "../../utils/axios";
const ResetPassword: React.FC = () => {
	const { isLightTheme } = useContext(GlobalContext);
	const [newPassword, setNewPassword] = useState<string>("");
	const [verifyNewPassword, setVerifyNewPassword] = useState<string>("");

	async function handleSubmit() {
		try {
			await axios.post("/api/reset-password", {
				newPassword,
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
				<h1 className={styles.header}>MyMD&nbsp;Markdown Editor&nbsp;Reset</h1>
				<hr />
				<input
					type="password"
					className={styles.input}
					placeholder=">>> Enter Your New Password"
					required
					minLength={10}
					maxLength={60}
					onChange={(e) => setNewPassword(e.currentTarget.value)}
					value={newPassword}
				/>
				<input
					type="password"
					className={styles.input}
					placeholder=">>> Re-enter Your New Password"
					required
					minLength={10}
					maxLength={60}
					onChange={(e) => setVerifyNewPassword(e.currentTarget.value)}
					value={verifyNewPassword}
				/>

				<div className={styles.flexButtons}>
					<button type="reset" className={styles.itemButtons}>
						Clear Field
					</button>
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
