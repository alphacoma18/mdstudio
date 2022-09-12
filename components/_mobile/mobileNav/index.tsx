import React, { useContext } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import GlobalContext from "../../../utils/context";
const MobileNav: React.FC = () => {
	const { handleLeftBarOpen, handleRightBarOpen, isLightTheme } =
		useContext(GlobalContext);
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
			{isLightTheme ? (
				<Image
					src={"/logo/mymd_mobile_logo_light_2.png"}
					height={60}
					width={60}
					alt="MyMD Light Theme Mobile Logo"
				/>
			) : (
				<Image
					src={"/logo/mymd_mobile_logo_dark_2.png"}
					height={60}
					width={60}
					alt="MyMD Dark Theme Mobile Logo"
				/>
			)}

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
