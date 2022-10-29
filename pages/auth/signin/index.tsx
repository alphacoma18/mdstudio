import { GetServerSideProps, NextPage } from "next";
import { getCsrfToken, getProviders, signIn } from "next-auth/react";
import Link from "next/link";
import GenImage from "../../../components/gen/image";
import styles from "./index.module.css";
const SignIn: NextPage = ({ providers, csrfToken }: any) => {
	return (
		<section className={styles.bg}>
			<div className={styles.flexDiv}>
				<span className={styles.spanImage}>
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
				</span>
				<hr />
				<span className={styles.flexMethods}>
					{Object.values(providers).map((provider: any) => (
						<>
							{provider.name === "Email" ? (
								<>
									<form
										action="/api/auth/signin/email"
										method="post"
										className={styles.emailMethod}
									>
										<input
											name="csrfToken"
											type="hidden"
											defaultValue={csrfToken}
										/>
										<input
											name="email"
											type="email"
											placeholder="email@example.com"
											required
											autoFocus
											className={styles.input}
										/>
										<button
											type="submit"
											className={`${styles.button} ${styles.submit} icon-email`}
										>
											Sign in with Email
										</button>
										<p className={styles.or}>or sign in with</p>
									</form>
								</>
							) : (
								<button
									key={provider.name}
									onClick={() => signIn(provider.id)}
									name={provider.name}
									className={`
									${styles.button}
									${styles.itemMethod}
									${styles.name} icon-${String(provider.name).toLowerCase()}`}
								>
									{provider.name}
								</button>
							)}
						</>
					))}
				</span>
				<hr />
				<details className={styles.why}>
					<summary>But Why Sign In?</summary>
					By signing in, we can keep track of your identity and serve you all
					your markdowns to allow multi-project edits. By using the guest
					account, we generate a random hash each markdown publication for
					edits. This is hectic to keep track of and so we encourage a signup
					for full control over your projects. Read more at our{" "}
					<Link href="/faqs">
						<a className={styles.faqsLink}>FAQs.</a>
					</Link>
				</details>
			</div>
		</section>
	);
};
export default SignIn;
export const getServerSideProps: GetServerSideProps = async (context) => {
	const providers = await getProviders();
	const csrfToken = await getCsrfToken(context);
	return {
		props: {
			providers,
			csrfToken,
		},
	};
};
