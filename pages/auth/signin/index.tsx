import { GetServerSideProps, NextPage } from "next";
import { getCsrfToken, getProviders } from "next-auth/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import GenLogo from "../../../components/gen/logo";
import GenSuspense from "../../../components/gen/suspense";
import styles from "./index.module.css";
const AuthForm = dynamic(() => import("../../../components/pages/auth/form"), {
	suspense: true,
});
const SignIn: NextPage = ({ providers, csrfToken }: any) => {
	return (
		<section className={styles.bg}>
			<div className={styles.flexDiv}>
				<span className={styles.spanImage}>
					<GenLogo
						logoLight={{
							src: "/logo/anymd_pc_logo_light.png",
							height: 80,
							width: 160,
							alt: "AnyMD Light Theme Desktop Logo",
						}}
						logoDark={{
							src: "/logo/anymd_pc_logo_dark.png",
							height: 80,
							width: 160,
							alt: "AnyMD Dark Theme Desktop Logo",
						}}
					/>
				</span>
				<hr />
				<GenSuspense fallback="Loading Form...">
					<AuthForm providers={providers} csrfToken={csrfToken} />
				</GenSuspense>
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
