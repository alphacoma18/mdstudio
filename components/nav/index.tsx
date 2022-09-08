import React from "react";
import styles from "./index.module.css";
const Nav: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.flexNavButton}>
				<button className={styles.itemNavButtons}>Preview</button>
				<button className={styles.itemNavButtons}>Publish</button>
				<button className={styles.itemNavButtons}>Login/Signup</button>
			</div>
			<div className={styles.flexNavButton}>
				<button className={styles.itemNavButtons}>Preview</button>
				<button className={styles.itemNavButtons}>Publish</button>
				<button className={styles.itemNavButtons}>Login/Signup</button>
			</div>
		</nav>
	);
};

export default Nav;
