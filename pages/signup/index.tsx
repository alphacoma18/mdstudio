import type { NextPage } from "next";
import Link from "next/link";
import { FormEvent, memo, useEffect, useState } from "react";
import GenError from "../../components/gen/error";
import GenImage from "../../components/gen/image";
import GenResponse, { IResponse } from "../../components/gen/response";
import Loader from "../../components/pages/index/loader";
import axios from "../../utils/axios";
import styles from "../login/index.module.css";
import styles2 from "./index.module.css";
const Signup: NextPage = () => {
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const [isError, setIsError] = useState<boolean>(false);
	const [isResponse, setIsResponse] = useState<boolean>(false);
	const [isLoader, setIsLoader] = useState<boolean>(false);

	const [response, setResponse] = useState<IResponse>({} as IResponse);
	const [error, setError] = useState<string>("");
	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			setIsLoader(true);
			const res = await axios.post("/signup", {
				username,
				email,
				password,
			});
			if (res.data.err) throw res.data.err;
			handleClear();
			setIsLoader(false);
			setIsResponse(true);
			setResponse({
				header: "Signup successful!",
				note: "Please check your email to verify your account.",
			});
		} catch (err: any) {
			setIsLoader(false);
			setIsError(true);
			setError(err);
		}
	}
	function handleClear() {
		setUsername("");
		setEmail("");
		setPassword("");
	}
	useEffect(() => {
		setIsError(false);
	}, [username, email, password]);

	return (
		<section className={styles.bg}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<GenImage
					imageLight={{
						src: "/logo/anymd_pc_logo_light.png",
						height: 80,
						width: 160,
						alt: "AnyMD Light Theme Desktop Logo",
					}}
					imageDark={{
						src: "/logo/anymd_pc_logo_dark.png",
						height: 80,
						width: 160,
						alt: "AnyMD Dark Theme Desktop Logo",
					}}
				/>
				<GenResponse props={{ isResponse, response }} />
				<GenError props={{ isError, error }} />
				<hr />
				{isLoader && <Loader />}
				<input
					type="text"
					className={styles.input}
					placeholder=">>> Enter Your Username"
					required
					minLength={5}
					maxLength={60}
					pattern="^([a-zA-Z]{1})([0-9a-zA-Z-._]{9,59})$"
					onChange={(e) => setUsername(e.currentTarget.value)}
					value={username}
				/>
				<input
					type="email"
					inputMode="email"
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
					placeholder=">>> Enter Your Password (min. 10)"
					required
					minLength={10}
					maxLength={30}
					onChange={(e) => setPassword(e.currentTarget.value)}
					value={password}
				/>
				<div className={styles.flexButtons}>
					<Link href={"/login"}>
						<a className={styles.itemButtons}>Login Instead</a>
					</Link>
					<button type="submit" className={styles.itemButtons}>
						Send Verification Link
					</button>
					<hr />
				</div>
				<details className={styles2.why}>
					<summary>But Why Sign Up?</summary>
					By signing up, we can keep track of your identity and serve you all
					your markdowns to allow multi-project edits. By using the guest
					account, we generate a random hash each markdown publication for
					edits. This is hectic to keep track of and so we encourage a signup
					for full control over your projects. Read more at our{" "}
					<Link href="/faqs">
						<a className={styles2.faqsLink}>FAQs.</a>
					</Link>
				</details>
			</form>
		</section>
	);
};

export default memo(Signup);
