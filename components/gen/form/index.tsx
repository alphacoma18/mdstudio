import GenButton from "../button";
import styles from "./index.module.css";
interface Props {
	children: React.ReactNode;
	props: {
		isActive: boolean;
		title: string;
		id: string;
		submitFunc: () => void;
		backFunc: () => void;
	};
}
const GenForm: React.FC<Props> = ({
	children,
	props: { isActive, title, submitFunc, backFunc, id },
}) => {
	return (
		<form
			className={`${styles.form} ${isActive ? styles.active : styles.inactive}`}
			id={id}
			onSubmit={(e) => {
				e.preventDefault();
				submitFunc();
			}}
		>
			<div className={styles.ctr}>
				<p className={styles.title}>
					<GenButton
						props={{
							type: "button",
							label: "Back button",
							onClick: backFunc,
							className: `${styles.back} btnPseudoBC `,
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
