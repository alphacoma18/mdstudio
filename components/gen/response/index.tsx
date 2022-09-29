import styles from "./index.module.css";
interface Props {
	props: {
		isResponse: boolean;
		response: string;
	};
}
const GenResponse: React.FC<Props> = ({ props: { isResponse, response } }) => {
	return (
		<>
			{isResponse && (
				<div className={styles.responseDiv}>
					<h3 className={styles.response}>{response}</h3>
				</div>
			)}
		</>
	);
};

export default GenResponse;
