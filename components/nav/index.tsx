import React from "react";
import styles from "./index.module.css";
const Nav: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<div></div>
			<div>
				<button className={styles.navButtons}>Preview</button>
				<button className={styles.navButtons}>Publish</button>
				<button className={styles.navButtons}>Login / Signup</button>
			</div>
		</nav>
	);
};

export default Nav;
