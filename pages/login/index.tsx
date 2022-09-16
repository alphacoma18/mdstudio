import React, { useState, useEffect, useContext } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import GlobalContext from "../../utils/context";
import Link from "next/link";
import axios from "../../utils/axios";
import Loader from "../../components/pages/index/loader";
const Login = () => {
	const { isLightTheme } = useContext(GlobalContext);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [isShowError, setIsShowError] = useState<boolean>(false);
	const [isLoader, setIsLoader] = useState<boolean>(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			setIsLoader(true);
			const res = await axios.post("/api/login", {
				email,
				password,
			});

			setIsShowError(false);
			setIsLoader(false);
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
					pattern="^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$"
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
