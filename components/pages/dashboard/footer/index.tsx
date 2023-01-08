import Link from "next/link";
import styles from "./index.module.css";
const DashboardFooter: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<h1>AnyMD: Markdown Publisher</h1>
			<q>Markdown Evolved</q>
			<div></div>
			<div>
				<Link href="">
					<a>
						<i className="icon-github"></i>
					</a>
				</Link>
				<Link href="">
					<a>
						<i className="icon-linkedin"></i>
					</a>
				</Link>
			</div>
			<hr className="hr-white" />
			<p>
				Made with <i className="icon-heart"></i> in the Philippines
			</p>
			<p className={styles.credit}>
				Copyright © 2023 Alpha&nbsp;Romer&nbsp;N.&nbsp;Coma. All rights reserved
			</p>
		</footer>
	);
};

export default DashboardFooter;
