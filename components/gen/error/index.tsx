import styles from "./index.module.css";
interface Props {
	props: {
		isError: boolean;
		error: string;
	};
}
const GenError: React.FC<Props> = ({ props: { isError, error } }) => {
	return (
		<>
			{isError && (
				<div className={styles.errorDiv}>
					<h3 className={styles.error}>{error}</h3>
				</div>
			)}
		</>
	);
};

export default GenError;
