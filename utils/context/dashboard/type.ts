import { ITreeProjects } from "../../db/account/tree";
export interface IContextDashboard {
	projects: ITreeProjects["projects"];
	handleProjects: (_projects: ITreeProjects["projects"]) => void;
}
