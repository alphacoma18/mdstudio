import GenButton from "@/gen/button";
import GenFragment from "@/gen/fragment";
import { signIn } from "next-auth/react";
import styles from "./index.module.css";
interface Props {
	providers: { [key: string]: any };
	csrfToken: string | undefined;
}
const AuthForm: React.FC<Props> = ({ providers, csrfToken }) => {
	return (
		<span className={styles.flexMethods}>
			{Object.values(providers).map((provider: any) => (
				<GenFragment key={provider.name}>
					{provider.name === "Email" ? (
						<form
							action="/api/auth/signin/email"
							method="post"
							className={styles.emailMethod}
						>
							<input
								name="csrfToken"
								type="hidden"
								defaultValue={csrfToken ?? ""}
							/>
							<input
								name="email"
								type="email"
								placeholder="email@example.com"
								required
								minLength={3}
								maxLength={254}
								autoComplete="off"
								spellCheck="false"
								className={"inputThick"}
							/>
							<GenButton
								props={{
									label: "Signin: Email",
									type: "submit",
									className: `inputBtn btnPseudoBC icon-email`,
								}}
							>
								{"Sign in with Email"}
							</GenButton>
							<p className={styles.or}>or sign in with</p>
						</form>
					) : (
						<GenButton
							props={{
								label: `Signin via ${provider.name}`,
								className: `${styles.button} ${styles.itemMethod} ${
									styles.name
								} btnPseudoO icon-${String(provider.name).toLowerCase()}`,
								onClick: () => signIn(provider.id),
							}}
						>
							{provider.name}
						</GenButton>
					)}
				</GenFragment>
			))}
		</span>
	);
};

export default AuthForm;
