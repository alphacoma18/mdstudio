import { TFileSystem } from "../../../../../utils/db/account";
export const data: TFileSystem = {
	_id: "60a8b1b1b1b1b1b1b1b1b1b1" as any,
	folderName: "root",
	isDir: true,
	files: [
		{
			_id: "60a8b1b1b1b1b1b1b1b1b1b2" as any,
			fileName: "file1",
			isDir: false,
			content: "content",
			title: "title",
			description: "description",
		},
		{
			_id: "60a8b1b1b1b1b1b1b1b1b1b3" as any,
			fileName: "file2",
			isDir: false,
			content: "content",
			title: "title",
			description: "description",
		},
	],
	folders: [
		{
			_id: "60a8b1b1b1b1b1b1b1b1b1b4" as any,
			folderName: "folder2",
			isDir: true,
			files: [
				{
					_id: "60a8b1b1b1b1b1b1b1b1b1b5" as any,
					fileName: "file1",
					isDir: false,
					content: "content",
					title: "title",
					description: "description",
				},
			],
			folders: [],
		},
		{
			_id: "60a8b1b1b1b1b1b1b1b1b1b6" as any,
			folderName: "folder3",
			isDir: true,
			files: [
				{
					_id: "60a8b1b1b1b1b1b1b1b1b1b7" as any,
					fileName: "file1",
					isDir: false,
					content: "content",
					title: "title",
					description: "description",
				},
			],
			folders: [
				{
					_id: "60a8b1b1b1b1b1b1b1b1b1b8" as any,
					folderName: "folder4",
					isDir: true,
					files: [
						{
							_id: "60a8b1b1b1b1b1b1b1b1b1b9" as any,
							fileName: "file1",
							isDir: false,
							content: "content",
							title: "title",
							description: "description",
						},
					],
					folders: [],
				},
			],
		},
	],
};
