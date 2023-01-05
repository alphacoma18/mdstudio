import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { ConnectOptions, Types, connect } from "mongoose";

class FlatFile {
	@prop()
	_id!: Types.ObjectId;

	@prop()
	fileName!: string;

	@prop()
	isDir!: false;

	@prop()
	content!: string;

	@prop()
	parentId!: Types.ObjectId;
}
class FlatFolder {
	@prop()
	_id!: Types.ObjectId;

	@prop()
	folderName!: string;

	@prop()
	isDir!: true;

	@prop()
	files!: Types.ObjectId[];

	@prop()
	parentId?: Types.ObjectId;
}

@modelOptions({ options: { allowMixed: 0 } })
class FlatProject {
	@prop()
	_id!: Types.ObjectId;

	@prop()
	projectName!: string;

	@prop()
	projectDescription!: string;

	@prop()
	fileSystem!: (FlatFile | FlatFolder)[];
}

@modelOptions({ options: { allowMixed: 0 } })
class FlatProjects {
	@prop({ type: Types.ObjectId, ref: "users" })
	userId!: Types.ObjectId;

	@prop()
	projects!: FlatProject[];
}

const db_projects = getModelForClass(FlatProjects);

// converts string to ObjectId or creates a new one
export function mongooseId(id?: string) {
	return new Types.ObjectId(id);
}
type TFlatFile = FlatFile;
type TFlatFolder = FlatFolder;
type TFlatProject = FlatProject;
type TFlatFileSystem = FlatProject["fileSystem"];
type TFlatProjects = FlatProjects;
export type {
	TFlatFile,
	TFlatFolder,
	TFlatProject,
	TFlatFileSystem,
	TFlatProjects,
};
async function run() {
	try {
		await connect(process.env.MONGO_URI ?? "", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as ConnectOptions);
	} catch (error) {
		console.error(error);
	}
}
void run();
export default db_projects;
