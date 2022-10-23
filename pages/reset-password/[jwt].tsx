import type { NextPage } from "next";
import { memo, useState } from "react";
import GenImage from "../../components/gen/image";
import axios from "../../utils/axios";
import styles from "../login/index.module.css";

const ResetPassword: NextPage = () => {
	const [newPassword, setNewPassword] = useState<string>("");
	const [verifyNewPassword, setVerifyNewPassword] = useState<string>("");

	async function handleSubmit() {
		try {
			await axios.post("/reset-password", {
				newPassword,
			});
		} catch (e) {}
	}
	return (
		<section className={styles.bg}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<GenImage
					imageLight={{
						src: "/logo/mymd_pc_logo_light.png",
						height: 80,
						width: 160,
						alt: "MyMD Light Theme Desktop Logo",
					}}
					imageDark={{
						src: "/logo/mymd_pc_logo_dark.png",
						height: 80,
						width: 160,
						alt: "MyMD Dark Theme Desktop Logo",
					}}
				/>
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

export default memo(ResetPassword);
