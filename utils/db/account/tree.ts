import { Types } from "mongoose";

interface ITreeFile {
	_id: Types.ObjectId;
	fileName: string;
	content: string;
	isDir: false;
}
export interface ITreeFolder {
	_id: Types.ObjectId;
	folderName: string;
	isDir: true;
	files: ITreeFile[];
	folders: ITreeFolder[];
}
export interface ITreeProject {
	_id: Types.ObjectId;
	projectName: string;
	projectDescription: string;
	fileSystem: ITreeFolder;
}

export interface ITreeProjects {
	userId: Types.ObjectId;
	projects: ITreeProject[];
}
