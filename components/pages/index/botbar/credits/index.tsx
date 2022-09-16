import React from "react";
import styles from "./index.module.css";
const Credits: React.FC = () => {
	return (
		<div>
			<span className={styles.version}>
				<i className="icon-rocket"></i>
				Version: Dev{" "}
			</span>
			<span className={styles.credits}>
				<i className="icon-certificate"></i>
				MIT License{" "}
				<span className={styles.mobileCut}>
					{" "}
					Copyright (c) 2022{" "}
					<a
						href="https://www.linkedin.com/in/alpha-coma/"
						title="Redirect to MyMD developer LinkedIn profile"
						aria-label="Redirect to MyMD developer LinkedIn profile"
						rel="noopener noreferrer"
						target={"_blank"}
					>
						Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma
					</a>
				</span>
			</span>
		</div>
	);
};

export default Credits;
