import { FileSchema, _ID } from "../../../db/account";
export interface NewFileSchema {
	[_id: _ID]: {
		file_name: string;
		content: string;
	};
}
export interface IContextIndex {
	files: FileSchema;
	setFiles: React.Dispatch<React.SetStateAction<FileSchema>>;
	newFiles: NewFileSchema;
	setNewFiles: React.Dispatch<React.SetStateAction<NewFileSchema>>;
	currentFileId: string;
	setCurrentFileId: React.Dispatch<React.SetStateAction<string>>;
}
