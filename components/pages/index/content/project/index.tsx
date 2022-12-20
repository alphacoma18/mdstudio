import Link from "next/link";
import { TProject } from "../../../../../utils/db/account";
interface IProject {
	project: TProject;
}
const IndexContentProject: React.FC<IProject> = (props) => {
	return (
		<Link href={`/project/${props.project.projectId}`}>
			<a>{props.project.projectName}</a>
		</Link>
	);
};
export default IndexContentProject;
