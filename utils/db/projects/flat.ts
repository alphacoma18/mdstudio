import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import mongoose, { Types } from "mongoose";

class File {
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
	parentId: Types.ObjectId | null = null;
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
	isPublished!: boolean;

	@prop()
	fileSystem!: (File | FlatFolder)[];
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
export function isObjectId(id: string | Types.ObjectId | undefined | null) {
	if (!id) return false;
	return Types.ObjectId.isValid(id);
}
type TFile = File;
type TFlatFolder = FlatFolder;
type TFlatProject = FlatProject;
type TFlatFileSystem = FlatProject["fileSystem"];
type TFlatProjects = FlatProjects;
export type {
	TFile,
	TFlatFolder,
	TFlatProject,
	TFlatFileSystem,
	TFlatProjects,
};
export default db_projects;
const isConnectionOpen = mongoose.connection.readyState === 1;
async function run() {
	try {
		if (!isConnectionOpen) {
			await mongoose.disconnect();
			await mongoose.connect(process.env.MONGO_URI, {
				minPoolSize: 20,
				maxPoolSize: 400,
				keepAlive: true,
				appName: "AnyMD",
			});
		} else {
			console.info("Connection already open");
		}
		console.info("Connected to MongoDB");
	} catch (error) {
		console.error(error);
	}
}
run();
