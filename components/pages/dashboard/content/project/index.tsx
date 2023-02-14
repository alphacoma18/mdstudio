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
					className: styles.project,
				}}
			>
				{project.projectName}
				<p>{project.projectDescription}</p>
			</GenLink>
		</>
	);
};
export default DashboardContentProject;
