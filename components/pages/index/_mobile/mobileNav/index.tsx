import { memo, useContext } from "react";
import GlobalContext from "../../../../../utils/context";
import ImageGen from "../../../../../utils/image";
import styles from "./index.module.css";

interface Props {
	props: {
		handleLeftBarOpen: () => void;
		handleRightBarOpen: () => void;
	};
}
const MobileNav: React.FC<Props> = ({
	props: { handleLeftBarOpen, handleRightBarOpen },
}) => {
	const { isLightTheme } = useContext(GlobalContext);
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
				<a href="." className="imageAnchor">
					<ImageGen
						src={"/logo/mymd_mobile_logo_light_2.png"}
						height={60}
						width={60}
						alt="MyMD Light Theme Mobile Logo"
					/>
				</a>
			) : (
				<a href="." className="imageAnchor">
					<ImageGen
						src={"/logo/mymd_mobile_logo_dark_2.png"}
						height={60}
						width={60}
						alt="MyMD Dark Theme Mobile Logo"
					/>
				</a>
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

export default memo(MobileNav);