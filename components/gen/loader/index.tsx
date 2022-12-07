import styles from "./index.module.css";
const GenLoader: React.FC = () => {
	return (
		<section className={styles.outer}>
			<div className={styles.inner}>
				<div className={styles.loader}></div>
			</div>
		</section>
	);
};

export default GenLoader;
