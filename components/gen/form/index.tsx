import GenButton from "../button";
import styles from "./index.module.css";
interface Props {
	children: React.ReactNode;
	props: {
		isActive: boolean;
		title: string;
		submitFunc: () => void;
		backFunc?: () => void;
	};
}
const GenForm: React.FC<Props> = ({
	children,
	props: { isActive, title, submitFunc, backFunc },
}) => {
	return (
		<form
			className={`${styles.form} ${isActive ? styles.active : styles.inactive}`}
			onSubmit={(e) => {
				e.preventDefault();
				submitFunc();
			}}
		>
			<div className={styles.limit}>
				<p className={styles.title}>
					<GenButton
						props={{
							type: "button",
							label: "Back button",
							onClick: () => {
								if (backFunc) backFunc();
							},
							className: styles.back,
						}}
					>
						<i className={`icon-back`} />
					</GenButton>
					{title}
				</p>
				<hr />
				{children}
			</div>
		</form>
	);
};
export default GenForm;
