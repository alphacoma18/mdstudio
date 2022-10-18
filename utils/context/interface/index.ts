import { FileSchema, _ID } from "../../db/account";
export interface NewFileSchema {
	[_id: _ID]: {
		file_name: string;
		content: string;
	};
}
export interface User {
	_id: string;
	username: string;
}
export interface IGlobalContext {
	isLightTheme: boolean;
	handleTheme: () => void;
	user: User;
	setUser: React.Dispatch<React.SetStateAction<User>>;
	files: FileSchema;
	setFiles: React.Dispatch<React.SetStateAction<FileSchema>>;
	newFiles: NewFileSchema;
	setNewFiles: React.Dispatch<React.SetStateAction<NewFileSchema>>;
}
