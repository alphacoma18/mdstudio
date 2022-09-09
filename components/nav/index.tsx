import React from "react";
import styles from "./index.module.css";
const Nav: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.flexNavButton}>
				<p>Index.md</p>
				<button className={styles.itemNavButtons}>
					<i className="icon-home"></i>
					Home
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-wrench"></i>
					Tools
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-help-circled"></i>
					Help
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-share-squared"></i>
					Share
				</button>
			</div>
			<div className={styles.flexNavButton}>
				<button className={styles.itemNavButtons}>
					<i className="icon-download"></i>
					Download
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-eye"></i>
					Preview
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-publish"></i>
					Publish
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-login"></i>
					Login/Signup
				</button>
			</div>
		</nav>
	);
};

export default Nav;
