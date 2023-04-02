import ContextDashboard from "@/context/dashboard";
import GenButton from "@/gen/button";
import { memo, useContext, useState } from "react";
import { DashboardContentNewProject, DashboardContentProject } from "..";
import styles from "./index.module.css";

export default memo(() => {
	const { projects } = useContext(ContextDashboard);
	const [isActive, setIsActive] = useState<boolean>(false);
	const isEmpty = projects.length === 0;
	return (
		<section className={styles.section}>
			<div className={isEmpty ? styles.emptyContainer : styles.container}>
				{isEmpty ? (
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
								type: "button",
								onClick: () => setIsActive(true),
								className: `${styles.create} btnPseudoBC`,
							}}
						>
							Create your first project
						</GenButton>
					</div>
				) : (
					<>
						<GenButton
							props={{
								label: "Create new project",
								type: "button",
								onClick: () => setIsActive(true),
								className: `${styles.create} btnPseudoBC`,
							}}
						>
							<i className="icon-plus-squared"></i>
							Create new project
						</GenButton>
						{projects.map((project) => (
							<DashboardContentProject
								key={project._id.toString()}
								project={project}
							/>
						))}
					</>
				)}
				<DashboardContentNewProject
					props={{
						isActive,
						setIsActive,
					}}
				/>
			</div>
		</section>
	);
});
