import React from "react";
import styles from "./index.module.css";
const Credits: React.FC = () => {
	return (
		<div>
			<span className={styles.version}>Version: Dev - </span>
			<span className={styles.credits}>
				MIT License Copyright (c) 2022{" "}
				<a
					href="https://www.linkedin.com/in/alpha-coma/"
					title="Redirect to MyERL developer LinkedIn profile"
					aria-label="Redirect to MyERL developer LinkedIn profile"
					rel="noopener noreferrer"
					target={"_blank"}
				>
					Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma
				</a>
			</span>
		</div>
	);
};

export default Credits;
