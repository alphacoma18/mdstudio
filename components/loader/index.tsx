import React from "react";
import styles from "./index.module.css";
const Loader: React.FC = () => {
	return (
		<>
			<section className={styles.loaderOuter}>
				<div className={styles.loaderInner}>
					<div className={styles.loader}></div>
				</div>
			</section>
		</>
	);
};

export default Loader;
