import styles from "./index.module.css";
export interface IResponse {
	header: string;
	note?: string;
}
interface Props {
	props: {
		isResponse: boolean;
		response: IResponse;
	};
}
const GenResponse: React.FC<Props> = ({
	props: {
		isResponse,
		response: { header, note },
	},
}) => {
	return (
		<>
			{isResponse && (
				<div className={styles.responseDiv}>
					<h3 className={styles.response}>{header}</h3>
					<h3 className={styles.response}>{note}</h3>
				</div>
			)}
		</>
	);
};

export default GenResponse;
