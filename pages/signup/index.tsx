import type { NextPage } from "next";
import Link from "next/link";
import { FormEvent, memo, useContext, useState } from "react";
import axios from "../../utils/axios";
import GlobalContext from "../../utils/context";
import ImageGen from "../../utils/image";
import styles from "../login/index.module.css";
import styles2 from "./index.module.css";

const Signup: NextPage = () => {
	const { isLightTheme } = useContext(GlobalContext);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			const res = await axios.post("/signup", {
				email,
				password,
			});
		} catch (e: any) {}
	}
	return (
		<section className={styles.bg}>
			<form className={styles.form}>
				{isLightTheme ? (
					<ImageGen
						src={"/logo/mymd_pc_logo_light.png"}
						height={80}
						width={160}
						alt="MyMD Light Theme Desktop Logo"
					/>
				) : (
					<ImageGen
						src={"/logo/mymd_pc_logo_dark.png"}
						height={80}
						width={160}
						alt="MyMD Dark Theme Desktop Logo"
					/>
				)}
				<h1 className={styles.header}>MyMD&nbsp;Markdown Editor&nbsp;Signup</h1>
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
