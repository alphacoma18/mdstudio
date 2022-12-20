import { useContext, useState } from "react";
import handleAxios from "../../../../utils/axios";
import ContextIndex from "../../../../utils/context/index";
import GenButton from "../../../gen/button";
import styles from "./index.module.css";
import IndexContentProject from "./project";
const IndexContent: React.FC = () => {
	const { projects } = useContext(ContextIndex);
	const [isCreating, setIsCreating] = useState<boolean>(false);
	async function handlePrompt() {
		const projectName = prompt("New Project Name:");
		if (projectName === null || projectName === "") return;
		await handleAxios({
			method: "post",
			data: { projectName },
			url: "/index/newProject",
		});
	}

	return (
		<section className={styles.section}>
			{/* <button>
				<div className={styles.content}>Hello World</div>
			</button> */}
			{projects.length === 0 && (
				<>
					<div></div>
					<div className={styles.empty}>
						<h1 className={styles.emptyTitle}>
							You don&apos;t have any projects yet.
						</h1>
						<p className={styles.emptySubtitle}>
							Click the button below to create a new project.
						</p>
						<hr />
					</div>
				</>
			)}
			{projects.map((project) => {
				return (
					<IndexContentProject key={project._id.toString()} project={project} />
				);
			})}
			<div>
				<GenButton
					props={{
						label: "Create New Project",
						type: "button",
						onClick: () => handlePrompt(),
						className: styles.mobileNewProject,
					}}
				>
					<i className="icon-plus-circled"></i>
				</GenButton>
			</div>
		</section>
	);
};

export default IndexContent;
