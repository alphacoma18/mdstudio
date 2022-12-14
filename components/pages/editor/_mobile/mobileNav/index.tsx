import { memo, useContext } from "react";
import ContextIndex from "../../../../../utils/context/index";
import GenButton from "../../../../gen/button";
import GenLogo from "../../../../gen/logo";
import GenReload from "../../../../gen/reload";
import styles from "./index.module.css";
interface Props {
	props: {
		func: () => void;
		label: string;
	};
}
const MenuContainer: React.FC<Props> = ({ props: { func, label } }) => {
	return (
		<section>
			<GenButton
				props={{
					label: "Toggle ",
					className: `${styles.menuContainer}`,
					onClick: func,
				}}
			>
				<div className={styles.menuLines}></div>
				<div className={styles.menuLines}></div>
				<div className={styles.menuLines}></div>
			</GenButton>
		</section>
	);
};

const EditorMobileNav: React.FC = () => {
	const { updateBarState } = useContext(ContextIndex);
	return (
		<nav className={styles.mobileNav}>
			<MenuContainer
				props={{
					func: () => updateBarState({ type: "leftBarOpen" }),
					label: "Toggle left menu bar",
				}}
			/>
			<GenReload>
				<GenLogo
					light={{
						src: "/logo/anymd_mobile_logo_light_2.png",
						height: 60,
						width: 60,
						alt: "AnyMD Light Theme Mobile Logo",
					}}
					dark={{
						src: "/logo/anymd_mobile_logo_dark_2.png",
						height: 60,
						width: 60,
						alt: "AnyMD Dark Theme Mobile Logo",
					}}
				/>
			</GenReload>
			<MenuContainer
				props={{
					func: () => updateBarState({ type: "rightBarOpen" }),
					label: "Toggle right menu bar",
				}}
			/>
		</nav>
	);
};

export default memo(EditorMobileNav);
