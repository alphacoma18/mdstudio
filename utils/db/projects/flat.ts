import {
	getModelForClass,
	index,
	modelOptions,
	prop,
} from "@typegoose/typegoose";
import mongoose, { Types } from "mongoose";

@index({ fileName: 1, parentId: 1 }, { unique: true })
class File {
	@prop({ required: true, unique: true })
	_id!: Types.ObjectId;

	@prop({ required: true, unique: true })
	fileName!: string;

	@prop({ required: true })
	isDir!: false;

	@prop({ required: true })
	content!: string;

	@prop({ required: true })
	parentId!: Types.ObjectId;
}
class FlatFolder {
	@prop({ required: true, unique: true })
	_id!: Types.ObjectId;

	@prop({ required: true, unique: true })
	folderName!: string;

	@prop({ required: true })
	isDir!: true;

	@prop()
	parentId?: Types.ObjectId;
}

@index({ projectName: 1, userId: 1 }, { unique: true })
@modelOptions({ options: { allowMixed: 0 } })
class FlatProject {
	@prop({ required: true, unique: true })
	_id!: Types.ObjectId;

	@prop({ required: true, unique: true })
	projectName!: string;

	@prop()
	projectDescription!: string;

	@prop({ required: true })
	isPublished!: boolean;

	@prop({ required: true })
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
void run();
