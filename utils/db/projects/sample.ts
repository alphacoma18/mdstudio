import { mongooseId } from "./flat";

// sample input - type: TFlatFileSystem
[
	{
		_id: mongooseId("63aeecaf5af4c6da9b1eb510"),
		folderName: "root",
		isDir: true,
		files: [],
	},
	{
		_id: mongooseId("63aeecaf5af4c6da9b1eb511"),
		folderName: "Nested folder 1",
		isDir: true,
		files: [],
		parentId: mongooseId("63aeecaf5af4c6da9b1eb510"),
	},
	{
		_id: mongooseId("63aeecaf5af4c6da9b1eb512"),
		fileName: "Nested file 1.1",
		isDir: false,
		content: "some content",
		parentId: mongooseId("63aeecaf5af4c6da9b1eb511"),
	},
	{
		_id: mongooseId("63aeecaf5af4c6da9b1eb513"),
		fileName: "Nested file 1.2",
		isDir: false,
		content: "some content",
		parentId: mongooseId("63aeecaf5af4c6da9b1eb511"),
	},
];

// sample output - type: TTreeFileSystem
[
	{
		_id: "63aeecaf5af4c6da9b1eb510",
		folderName: "root",
		isDir: true,
		files: [],
		folders: [
			{
				_id: "63aeecaf5af4c6da9b1eb511",
				folderName: "Nested folder 1",
				isDir: true,
				files: [
					{
						_id: "63aeecaf5af4c6da9b1eb512",
						fileName: "Nested file 1.1",
						isDir: false,
						content: "some content",
						parentId: "63aeecaf5af4c6da9b1eb511",
					},
					{
						_id: "63aeecaf5af4c6da9b1eb513",
						fileName: "Nested file 1.2",
						isDir: false,
						content: "some content",
						parentId: "63aeecaf5af4c6da9b1eb511",
					},
				],
				folders: [],
				parentId: "63aeecaf5af4c6da9b1eb510",
			},
		],
	},
];
