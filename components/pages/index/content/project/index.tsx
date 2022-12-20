import Link from "next/link";
import { TProject } from "../../../../../utils/db/account";
interface IProject {
	project: TProject;
}
const IndexContentProject: React.FC<IProject> = (props) => {
	return (
		<Link href={`/editor/${props.project._id}`}>
			<a>{props.project.projectName}</a>
		</Link>
	);
};
export default IndexContentProject;
