import type { NextPage } from "next";
import { memo, useContext, useState } from "react";
import axios from "../../utils/axios";
import GlobalContext from "../../utils/context";
import GenImage from "../../components/gen/image";
import styles from "../login/index.module.css";

const ResetPassword: NextPage = () => {
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
					<GenImage
						src="/logo/mymd_pc_logo_light.png"
						height={80}
						width={160}
						alt="MyMD Light Theme Desktop Logo"
					/>
				) : (
					<GenImage
						src="/logo/mymd_pc_logo_dark.png"
						height={80}
						width={160}
						alt="MyMD Dark Theme Desktop Logo"
					/>
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

export default memo(ResetPassword);
