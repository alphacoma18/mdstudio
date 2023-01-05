import { ITreeFolder } from "../../../../../utils/db/account/tree";
export const data: ITreeFolder = {
	_id: "5f9b5b0b0b9b0b0b0b0b0b0b" as any,
	folderName: "root",
	isDir: true,
	files: [
		{
			_id: "5f9b5b0b0b9b0b0b0b0b0b0b" as any,
			fileName: "file1",
			isDir: false,
			content: "content",
		},
		{
			_id: "5f9b5b0b0b9b0b0b0b0b0b0b" as any,
			fileName: "file2",
			isDir: false,
			content: "content",
		},
	],
	folders: [
		{
			_id: "5f9b5b0b0b9b0b0b0b0b0b0b" as any,
			folderName: "folder2",
			isDir: true,
			files: [
				{
					_id: "5f9b5b0b0b9b0b0b0b0b0b0b" as any,
					fileName: "file1",
					isDir: false,
					content: "content",
				},
			],
			folders: [],
		},
		{
			_id: "5f9b5b0b0b9b0b0b0b0b0b0b" as any,
			folderName: "folder3",
			isDir: true,
			files: [
				{
					_id: "5f9b5b0b0b9b0b0b0b0b0b0b" as any,
					fileName: "file1",
					isDir: false,
					content: "content",
				},
			],
			folders: [
				{
					_id: "5f9b5b0b0b9b0b0b0b0b0b0b" as any,
					folderName: "folder4",
					isDir: true,
					files: [],
					folders: [],
				},
			],
		},
	],
};
