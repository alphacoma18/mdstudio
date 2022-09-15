import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import GlobalContext from "../../utils/context";
import Link from "next/link";
const Login = () => {
	const { isLightTheme } = useContext(GlobalContext);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
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
				<h1 className={styles.header}>MyMD&nbsp;Markdown Editor&nbsp;Login</h1>
				<hr />
				<input
					type="email"
					className={styles.input}
					placeholder=">>> Enter Your Email Address"
					required
					minLength={10}
					maxLength={60}
					onChange={(e) => setEmail(e.currentTarget.value)}
					value={email}
				/>
				<input
					type="password"
					className={styles.input}
					placeholder=">>> Enter Your Password"
					required
					minLength={5}
					maxLength={60}
					onChange={(e) => setPassword(e.currentTarget.value)}
					value={password}
				/>
				<div className={styles.flexButtons}>
					<Link href={"/signup"}>
						<a className={styles.itemButtons}>Signup Instead</a>
					</Link>
					<button type="button" className={styles.itemButtons}>
						Login
					</button>
					<Link href={"/forgot-password"}>
						<a className={styles.itemButtons}> Forgot Password</a>
					</Link>
				</div>
				<hr />
			</form>
		</section>
	);
};

export default React.memo(Login);
