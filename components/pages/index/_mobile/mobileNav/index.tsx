import { memo } from "react";
import GenImage from "../../../../gen/image";
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
			<a href="." className="imageAnchor">
				<GenImage
					imageLight={{
						src: "/logo/anymd_mobile_logo_light_2.png",
						height: 60,
						width: 60,
						alt: "AnyMD Light Theme Mobile Logo",
					}}
					imageDark={{
						src: "/logo/anymd_mobile_logo_dark_2.png",
						height: 60,
						width: 60,
						alt: "AnyMD Dark Theme Mobile Logo",
					}}
				/>
			</a>
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
