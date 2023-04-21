import AuthForm from "@/dynamic/auth/form";
import GenLogo from "@/gen/logo";
import GenMeta from "@/gen/meta";
import {
	GetServerSideProps,
	InferGetServerSidePropsType,
	NextPage,
} from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken, getProviders } from "next-auth/react";
import styles from "./index.module.css";
const AuthSignIn: NextPage<
	InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ providers, csrfToken }) => {
	return (
		<section className={styles.bg}>
			<GenMeta
				props={{
					title: "Sign In",
					description: "Sign in to Markdown Studio",
				}}
			/>
			<div className={styles.flexDiv}>
				<span className={styles.spanImage}>
					<GenLogo type="squareBlue" props={{ height: 64, width: 64 }} />
					<h1>Markdown Studio</h1>
				</span>
				<hr />
				<AuthForm providers={providers ?? {}} csrfToken={csrfToken} />
				<hr />
				<details className={styles.why}>
					<summary>But Why Sign In?</summary>
					<p className="note">
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
export const getServerSideProps: GetServerSideProps = async (
	context: CtxOrReq | undefined
) => {
	const providers = await getProviders();
	const csrfToken = await getCsrfToken(context);
	return {
		props: {
			providers,
			csrfToken,
		},
	};
};
