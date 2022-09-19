import React from "react";
import styles from "./index.module.css";
const FileExplorer: React.FC = () => {
	return (
		<section className={styles.outerSection}>
			<div className={styles.paddingDiv}>
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
						README.aaaaaaaaaaaaaaaaaaaaaaaa
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						alpha.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
					<li>
						<i className="icon-minus-squared"></i>
						mymd.md
					</li>
				</ul>
			</div>
		</section>
	);
};

export default FileExplorer;
