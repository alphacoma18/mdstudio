import { memo, useContext } from "react";
import ContextGlobal from "../../../../utils/context";
import Editor from "./editor";
import styles from "./index.module.css";
interface Props {
	props: {
		explorerOpen: boolean;
	};
}
const Canvas: React.FC<Props> = ({ props: { explorerOpen } }) => {
	console.log("Canvas");

	const { isMobile } = useContext(ContextGlobal);
	return (
		<>
			<section
				className={`
						${styles.canvasSection}
						${explorerOpen && styles.explorerOpen}
						`}
			>
				<div className={styles.canvasPositioner}>
					<Editor />
				</div>
			</section>
		</>
	);
};

export default memo(Canvas);
