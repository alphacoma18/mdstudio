import React, { useContext } from "react";
import styles from "./index.module.css";
import GlobalContext from "../../utils/context";
const Nav: React.FC = () => {
	const { rightBarOpen } = useContext(GlobalContext);
	return (
		<nav className={rightBarOpen ? styles.navBarOpen : styles.navbar}>
			<h1 className={styles.mymdLogo}>MyMD</h1>
			<div className={styles.flexNavButton}>
				<button className={styles.itemNavButtons}>
					<i className="icon-home"></i>
					<span>Home</span>
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-wrench"></i>
					<span>Tools</span>
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-help-circled"></i>
					<span>Help</span>
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-share-squared"></i>
					<span>Share</span>
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-download"></i>
					<span>Download</span>
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-eye"></i>
					<span>Preview</span>
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-publish"></i>
					<span>Publish</span>
				</button>
				<button className={styles.itemNavButtons}>
					<i className="icon-login"></i>
					<span>Login/Signup</span>
				</button>
			</div>
		</nav>
	);
};

export default Nav;
