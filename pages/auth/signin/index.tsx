import AuthForm from "@/dynamic/auth/form";
import GenLogo from "@/gen/logo";
import { InferGetServerSidePropsType, NextPage } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken, getProviders } from "next-auth/react";
import Link from "next/link";
import styles from "./index.module.css";
const AuthSignIn: NextPage<
	InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ providers, csrfToken }) => {
	return (
		<section className={styles.bg}>
			<div className={styles.flexDiv}>
				{/* TODO: Make back button */}
				<Link href="/">
				</Link>
				<span className={styles.spanImage}>
					<GenLogo
						light={{
							src: "/logo/anymd_pc_logo_light.png",
							height: 80,
							width: 160,
							alt: "AnyMD Light Theme Desktop Logo",
						}}
						dark={{
							src: "/logo/anymd_pc_logo_dark.png",
							height: 80,
							width: 160,
							alt: "AnyMD Dark Theme Desktop Logo",
						}}
					/>
				</span>
				<hr />
				<AuthForm providers={providers ?? {}} csrfToken={csrfToken} />
				<hr />
				<details className={styles.why}>
					<summary>But Why Sign In?</summary>
					<p className="summaryNote">
						By signing in, we can keep track of your progress and projects, and
						enable you to use the dashboard for multi-project editing, custom
						publications, and more advanced features.
					</p>
				</details>
			</div>
		</section>
	);
};
export default AuthSignIn;
export const getServerSideProps = async (context: CtxOrReq | undefined) => {
	const providers = await getProviders();
	const csrfToken = (await getCsrfToken(context)) ?? "";
	return {
		props: {
			providers,
			csrfToken,
		},
	};
};
