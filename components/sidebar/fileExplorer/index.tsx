import React from "react";
import styles from "./index.module.css";
import { Resizable } from "re-resizable";
const FileExplorer: React.FC = () => {
	return (
		<Resizable
			className={styles.resizable}
			enable={{
				top: false,
				right: true,
				bottom: false,
				left: false,
				topRight: false,
				bottomRight: false,
				bottomLeft: false,
				topLeft: false,
			}}
			minWidth={"200px"}
			maxWidth={"25vw"}
		>
			<div className={styles.headerDiv}>
				<div className={styles.headerParagraph}>File-Explorer</div>
				<div className={styles.options}>
					<i className="icon-plus-squared"></i>
					<i className="icon-arrows-cw"></i>
				</div>
			</div>
			<ul className={styles.filesList}>
				<li>
					<i className="icon-minus-squared"></i>
					README.md
				</li>
				<li>
					<i className="icon-minus-squared"></i>
					alpha.md
				</li>
				<li>
					<i className="icon-minus-squared"></i>
					mymd.md
				</li>
			</ul>
		</Resizable>
	);
};

export default FileExplorer;
