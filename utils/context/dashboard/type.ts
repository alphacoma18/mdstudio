import { TProjects } from "../../db/account";
export interface IContextDashboard {
	projects: TProjects["projects"];
	handleProjects: (_projects: TProjects["projects"]) => void;
}
