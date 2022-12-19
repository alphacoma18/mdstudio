import { TProjects } from "../../db/account";
export interface IContextIndex {
	projects: TProjects["projects"];
	handleProjects: (_projects: TProjects["projects"]) => void;
}
