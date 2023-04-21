import { Types } from "mongoose";
import { TFile } from "./flat";
interface ITreeFolder {
	_id: Types.ObjectId;
	folderName: string;
	isDir: true;
	files: TFile[];
	folders: ITreeFolder[];
	parentId: Types.ObjectId | null;
}
interface ITreeProject {
	_id: Types.ObjectId;
	projectName: string;
	projectDescription: string;
	isPublished: boolean;
	fileSystem: ITreeFolder;
}

interface ITreeProjects {
	userId: Types.ObjectId;
	projects: ITreeProject[];
}
type TTreeFileSystem = (TFile | ITreeFolder)[];
export type { ITreeFolder, ITreeProject, ITreeProjects, TTreeFileSystem };
