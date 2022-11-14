import { memo } from "react";
import Editor from "./editor";
import styles from "./index.module.css";
interface Props {
	props: {
		explorerOpen: boolean;
	};
}
const Canvas: React.FC<Props> = ({ props: { explorerOpen } }) => {
	return (
		<>
			<span
				className={`
						${styles.canvasSection}
						${explorerOpen && styles.canvasSectionClose}
						`}
			>
				<Editor />
			</span>
		</>
	);
};

export default memo(Canvas);
