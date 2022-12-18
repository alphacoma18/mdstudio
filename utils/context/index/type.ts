import { TProjects } from "../../db/account";
export interface IContextIndex {
	projects: TProjects;
	setProjects: React.Dispatch<React.SetStateAction<TProjects>>;
}
