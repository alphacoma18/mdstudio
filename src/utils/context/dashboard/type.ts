import { ITreeProjects } from "@/db/projects/tree";
export interface IContextDashboard {
	projects: ITreeProjects["projects"];
	setProjects: React.Dispatch<React.SetStateAction<ITreeProjects["projects"]>>;
}
