import React, { useState } from "react";
import styles from "./index.module.css";
import { Resizable } from "re-resizable";
const FileExplorer: React.FC = () => {
	return (
		<Resizable
			className={styles.fileExplorerSection}
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
			minWidth={"15vw"}
			maxWidth={"25vw"}
		>
			<div className={styles.headerFileExplorer}>
				<div className={styles.x}>File-Explorer</div>
				<div className={styles.optionsFileExplorer}>
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
