import { memo, useContext } from "react";
import ContextIndex from "../../../../../utils/context/index";
import GenLogo from "../../../../gen/logo";
import GenReload from "../../../../gen/reload";
import styles from "./index.module.css";
interface Props {
	func: () => void;
}
const MenuContainer: React.FC<Props> = ({ func }) => {
	return (
		<section>
			<button className={styles.menuContainer} onClick={func}>
				<div className={styles.menuLines}></div>
				<div className={styles.menuLines}></div>
				<div className={styles.menuLines}></div>
			</button>
		</section>
	);
};

const EditorMobileNav: React.FC = () => {
	const { updateBarState } = useContext(ContextIndex);
	return (
		<nav className={styles.mobileNav}>
			<MenuContainer func={() => updateBarState({ type: "leftBarOpen" })} />
			<GenReload>
				<GenLogo
					logoLight={{
						src: "/logo/anymd_mobile_logo_light_2.png",
						height: 60,
						width: 60,
						alt: "AnyMD Light Theme Mobile Logo",
					}}
					logoDark={{
						src: "/logo/anymd_mobile_logo_dark_2.png",
						height: 60,
						width: 60,
						alt: "AnyMD Dark Theme Mobile Logo",
					}}
				/>
			</GenReload>
			<MenuContainer func={() => updateBarState({ type: "rightBarOpen" })} />
		</nav>
	);
};

export default memo(EditorMobileNav);
