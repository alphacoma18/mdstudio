import React, { useState, useEffect, useContext } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import GlobalContext from "../../utils/context";
import Link from "next/link";
import axios from "../../utils/axios";
import Loader from "../../components/loader";
const Login = () => {
	const { isLightTheme } = useContext(GlobalContext);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [isShowError, setIsShowError] = useState<boolean>(false);
	const [isLoader, setIsLoader] = useState<boolean>(false);
	const regex =
		/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			const pass = regex.test(email);
			if (!pass) throw "Error: Invalid URL";
			setIsLoader(true);
			// axios.post("/api/login", {
			// 	email,
			// 	password,
			// });
		} catch (err: any) {
			setError(err);
			setIsShowError(true);
			setIsLoader(false);
		}
	}
	useEffect(() => {
		setIsShowError(false);
	}, [email, password]);
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
				<h1 className={styles.header}>MyMD&nbsp;Markdown Editor&nbsp;Login</h1>
				{isShowError && (
					<div className={styles.error}>
						<h3>{error}</h3>
					</div>
				)}
				{isLoader && <Loader />}
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
					<Link href={"/"}>
						<a className={styles.itemButtons}>Continue as Guest</a>
					</Link>
					<button type="submit" className={styles.itemButtons}>
						Login
					</button>
					<Link href={"/signup"}>
						<a className={styles.itemButtons}>Signup Instead</a>
					</Link>
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
