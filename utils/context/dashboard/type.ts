import { ITreeProjects } from "@/db/projects/tree";
export interface IContextDashboard {
	projects: ITreeProjects["projects"];
	handleProjects: (_projects: ITreeProjects["projects"]) => void;
}
