import React, { useContext } from "react";
import styles from "./index.module.css";
import GlobalContext from "../../../utils/context";

const MobileNav: React.FC = () => {
	const { handleLeftBarOpen, handleRightBarOpen } = useContext(GlobalContext);
	return (
		<nav className={styles.mobileNav}>
			<section>
				<button
					type="button"
					className={styles.menuContainer}
					onClick={handleLeftBarOpen}
				>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
				</button>
			</section>
			<div>P</div>
			<section>
				<button
					type="button"
					className={styles.menuContainer}
					onClick={handleRightBarOpen}
				>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
					<div className={styles.menuLines}></div>
				</button>
			</section>
		</nav>
	);
};

export default MobileNav;
