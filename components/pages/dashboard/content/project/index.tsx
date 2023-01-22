import { ITreeProject } from "@/db/projects/tree";
import Link from "next/link";
interface IProject {
	project: ITreeProject;
}
const DashboardContentProject: React.FC<IProject> = (props) => {
	return (
		<Link href={`/editor/${props.project._id}`}>
			{props.project.projectName}
		</Link>
	);
};
export default DashboardContentProject;
