import { memo, useContext, useState } from "react";
import ContextDashboard from "@/context/dashboard";
import GenButton from "@/gen/button";
import styles from "./index.module.css";
import { DashboardContentNewProject } from "..";
const DashboardContent: React.FC = () => {
	const { projects } = useContext(ContextDashboard);
	const [isActive, setIsActive] = useState<boolean>(false);
	const isEmpty = projects.length === 0;
	return (
		<section className={styles.section}>
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
						onClick: () => setIsActive((prev) => !prev),
						className: styles.genNewProject,
					}}
				>
					{isActive ? (
						<i className="icon-cancel-circled"></i>
					) : (
						<i className="icon-plus-circled"></i>
					)}
				</GenButton>
			</div>
			<DashboardContentNewProject
				props={{
					isActive,
				}}
			/>
		</section>
	);
};

export default memo(DashboardContent);
