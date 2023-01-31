import { ITreeProject } from "@/db/projects/tree";
import GenLink from "@/gen/link";
interface IProject {
	project: ITreeProject;
}
const DashboardContentProject: React.FC<IProject> = ({ project }) => {
	return (
		<GenLink
			props={{
				href: `/editor/${project._id}`,
				label: `Navigate to project ${project.projectName}`,
			}}
		>
			{project.projectName}
		</GenLink>
	);
};
export default DashboardContentProject;
