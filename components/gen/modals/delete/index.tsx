import React from "react";
import styles from "./index.module.css";
interface Props {
	props: {
		file_name: string;
		handleFileDelete: () => void;
		handleFileDeleteCancel: () => void;
	};
}
const GenModalDelete: React.FC<Props> = ({
	props: { file_name, handleFileDelete, handleFileDeleteCancel },
}) => {
	return (
		<section className={styles.section}>
			<div className={styles.flexDiv}>
				<h2>Delete File?</h2>
				<p className={styles.warning}>Warning: You cannot undo this action.</p>
				<p>Are you sure you want to delete {file_name}? </p>
				<div className={styles.flexButton}>
					<button
						className={styles.cancel}
						onClick={handleFileDeleteCancel}
						autoFocus
					>
						Cancel
					</button>
					<button className={styles.delete} onClick={handleFileDelete}>
						Delete
					</button>
				</div>
			</div>
		</section>
	);
};

export default GenModalDelete;
