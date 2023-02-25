import { ITreeProject } from "@/db/projects/tree";
import GenLink from "@/gen/link";
import styles from "./index.module.css";
interface IProject {
	project: ITreeProject;
}
const DashboardContentProject: React.FC<IProject> = ({ project }) => {
	return (
		<>
			<GenLink
				props={{
					href: `/editor/${project._id}`,
					label: `Navigate to project ${project.projectName}`,
					className: `${styles.project} btnPseudoBC`,
				}}
			>
				<p className={styles.projectTitle}>{project.projectName}</p>
				{project.projectDescription}
			</GenLink>
		</>
	);
};
export default DashboardContentProject;
