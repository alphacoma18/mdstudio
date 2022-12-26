import styles from "./index.module.css";
interface Props {
	children: React.ReactNode;
	isActive: boolean;
}
const GenForm: React.FC<Props> = ({ children, isActive }) => {
	return (
		<section
			className={`${styles.section} ${
				isActive ? styles.active : styles.inactive
			}`}
		>
			{children}
		</section>
	);
};
export default GenForm;
