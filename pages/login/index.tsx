import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import GenError from "../../components/gen/error";
import GenImage from "../../components/gen/image";
import Loader from "../../components/pages/index/loader";
import axios from "../../utils/axios";
import styles from "./index.module.css";

const Login: NextPage = () => {
	const router = useRouter();
	const [credential, setCredential] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [error, setError] = useState<string>("");
	const [isError, setIsError] = useState<boolean>(false);
	const [isLoader, setIsLoader] = useState<boolean>(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			setIsLoader(true);
			const res = await axios.post("/login", {
				credential,
				password,
			});
			if (res.data.err) throw res.data.err;
			setIsLoader(false);
			router.push("/");
		} catch (err: any) {
			setIsLoader(false);
			setIsError(true);
			setError(err);
		}
	}
	useEffect(() => {
		setIsError(false);
	}, [credential, password]);
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
				{isLoader && <Loader />}
				<hr />
				<GenError props={{ isError, error }} />
				<input
					type="text"
					className={styles.input}
					placeholder=">>> Enter Your Username or Email Address"
					required
					minLength={5}
					maxLength={60}
					onChange={(e) => setCredential(e.currentTarget.value)}
					value={credential}
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
				<hr className="hr" />
			</form>
		</section>
	);
};
export default memo(Login);
