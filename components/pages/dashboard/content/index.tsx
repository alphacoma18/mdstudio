import { memo, useContext, useState } from "react";
import ContextDashboard from "../../../../utils/context/dashboard/index";
import GenButton from "../../../gen/button";
import GenForm from "../../../gen/form";
import styles from "./index.module.css";
const DashboardContent: React.FC = () => {
	const { projects } = useContext(ContextDashboard);
	const [isCreating, setIsCreating] = useState<boolean>(false);
	async function handlePrompt() {
		setIsCreating((prev) => !prev);
		// const projectName = prompt("New Project Name:");
		// if (!projectName) return;
		// await handleAxios({
		// 	method: "post",
		// 	data: { projectName },
		// 	url: "/index/newProject",
		// });
	}
	const isEmpty = projects.length === 0;

	return (
		<section className={isEmpty ? styles.sectionNone : styles.section}>
			{/* <button>
				<div className={styles.content}>Hello World</div>
			</button> */}
			{isEmpty && (
				<div className={styles.empty}>
					<h1 className={styles.emptyTitle}>
						You don&apos;t have any projects yet.
					</h1>
					<p className={styles.emptySubtitle}>
						Click the button below to create a new project.
					</p>
					<hr />
				</div>
			)}
			{/* {projects.map((project) => {
				return (
					<IndexContentProject key={project._id.toString()} project={project} />
				);
			})} */}
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
			<GenForm isActive={isCreating}>
				<h1>Hello World</h1>
			</GenForm>
		</section>
	);
};

export default memo(DashboardContent);
