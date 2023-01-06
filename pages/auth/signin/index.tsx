import { InferGetServerSidePropsType, NextPage } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken, getProviders } from "next-auth/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import GenLogo from "../../../components/gen/logo";
import GenSuspense from "../../../components/gen/suspense";
import styles from "./index.module.css";
const AuthForm = dynamic(
	async () => await import("../../../components/pages/auth/form"),
	{
		suspense: true,
	}
);
const AuthSignIn: NextPage<
	InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ providers, csrfToken }) => {
	return (
		<section className={styles.bg}>
			<div className={styles.flexDiv}>
				{/* TODO: Make back button */}
				<Link href="/">
					<a></a>
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
				<GenSuspense fallback="Loading Form...">
					<AuthForm providers={providers ?? {}} csrfToken={csrfToken} />
				</GenSuspense>
				<hr />
				<details className={styles.why}>
					<summary>But Why Sign In?</summary>
					<p className="summaryNote">
						By signing in, we can keep track of your identity and serve you all
						your markdowns to allow multi-project edits. By using the guest
						account, we generate a random hash each markdown publication for
						edits. This is hectic to keep track of and so we encourage a signup
						for full control over your projects. Read more at our{" "}
						<Link href="/faqs">
							<a className={styles.faqsLink}>FAQs.</a>
						</Link>
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
