import Link from "next/link";
import { ITreeProject } from "@/db/projects/tree";
interface IProject {
	project: ITreeProject;
}
const DashboardContentProject: React.FC<IProject> = (props) => {
	return (
		<Link href={`/editor/${props.project._id}`}>
			<a>{props.project.projectName}</a>
		</Link>
	);
};
export default DashboardContentProject;
