import { signIn } from "next-auth/react";
import GenFragment from "../../../gen/fragment";
import styles from "./index.module.css";
interface Props {
	providers: any;
	csrfToken: any;
}
const AuthForm: React.FC<Props> = ({ providers, csrfToken }) => {
	return (
		<span className={styles.flexMethods}>
			{Object.values(providers || {}).map((provider: any) => (
				<GenFragment key={provider.name}>
					{provider.name === "Email" ? (
						<form
							action="/api/auth/signin/email"
							method="post"
							className={styles.emailMethod}
						>
							<input name="csrfToken" type="hidden" defaultValue={csrfToken} />
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
					) : (
						<button
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
				</GenFragment>
			))}
		</span>
	);
};

export default AuthForm;
