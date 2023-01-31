import ContextDashboard from "@/context/dashboard";
import GenButton from "@/gen/button";
import { memo, useContext, useState } from "react";
import { DashboardContentNewProject } from "..";
import styles from "./index.module.css";
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
					<GenButton
						props={{
							label: "Create new project",
							onClick: () => setIsActive(true),
							className: styles.create,
						}}
					>
						Create your first project
					</GenButton>
				</div>
			)}
			{/* {projects.map((project) => {
				return (
					<IndexContentProject key={project._id.toString()} project={project} />
				);
			})} */}
			<DashboardContentNewProject
				props={{
					isActive,
					setIsActive,
				}}
			/>
		</section>
	);
};

export default memo(DashboardContent);
