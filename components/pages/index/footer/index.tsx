import styles from "./index.module.css";
const IndexFooter: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<h1>Hello World</h1>
			<p className={styles.credit}>
				MIT License Copyright (c) 2022 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma
			</p>
		</footer>
	);
};

export default IndexFooter;
