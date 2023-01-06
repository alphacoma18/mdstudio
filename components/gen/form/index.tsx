import styles from "./index.module.css";
interface Props {
	children: React.ReactNode;
	props: {
		isActive: boolean;
		title: string;
		submitFunc: () => void;
	};
}
const GenForm: React.FC<Props> = ({
	children,
	props: { isActive, title, submitFunc },
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
				<h1>{title}</h1>
				<hr />
				{children}
			</div>
		</form>
	);
};
export default GenForm;
