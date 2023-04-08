import ContextEditor from "@/context/editor";
import GenButton from "@/gen/button";
import GenLogo from "@/gen/logo";
import GenReload from "@/gen/reload";
import { memo, useContext } from "react";
import styles from "./index.module.css";
interface Props {
	props: {
		func: () => void;
		label: string;
	};
}
export const MenuContainer: React.FC<Props> = ({ props: { func, label } }) => {
	return (
		<section>
			<GenButton
				props={{
					label,
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

export default memo(() => {
	const { updateBarState } = useContext(ContextEditor);
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
					props={{
						height: 50,
						width: 50,
					}}
					type="squareClear"
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
});
