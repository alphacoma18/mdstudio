import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

class File {
	@prop({ index: true, unique: true, required: true })
	_id!: Types.ObjectId;

	@prop({
		unique: true,
		required: true,
		minlength: process.env.MIN_NOT_EMPTY_STRING_LENGTH,
		maxlength: process.env.MAX_FILE_NAME_LENGTH,
	})
	fileName!: string;

	@prop({ required: true })
	isDir!: false;

	@prop()
	content!: string;

	@prop()
	parentId!: Types.ObjectId;
}
class FlatFolder {
	@prop({ index: true, unique: true, required: true })
	_id!: Types.ObjectId;

	@prop({ index: true, unique: true, required: true })
	folderName!: string;

	@prop({ required: true })
	isDir!: true;

	@prop()
	parentId: Types.ObjectId | null = null;
}

@modelOptions({ options: { allowMixed: 0 } })
class FlatProject {
	@prop({ index: true, unique: true, required: true })
	_id!: Types.ObjectId;

	@prop({
		unique: true,
		minlength: process.env.MIN_NOT_EMPTY_STRING_LENGTH,
		maxlength: process.env.MAX_PROJECT_NAME_LENGTH,
	})
	projectName!: string;

	@prop({
		maxlength: process.env.MAX_PROJECT_DESCRIPTION_LENGTH,
	})
	projectDescription!: string;

	@prop()
	isPublished!: boolean;

	@prop({ index: true })
	fileSystem!: (File | FlatFolder)[];
}

@modelOptions({ options: { allowMixed: 0 } })
class FlatProjects {
	@prop({
		type: Types.ObjectId,
		ref: "users",
		index: true,
		unique: true,
		required: true,
	})
	userId!: Types.ObjectId;

	@prop()
	projects!: FlatProject[];
}

const db_projects = getModelForClass(FlatProjects);

export function mongooseId(id?: string) {
	if (arguments.length === 0) return new Types.ObjectId();
	if (!isObjectId(id)) throw new Error("Not a valid string for ObjectId");
	return new Types.ObjectId(id);
}
export function isObjectId(id: any) {
	if (!id) return false;
	if (typeof id !== "string") return false;
	return Types.ObjectId.isValid(id);
}

export function serializeJSON<T>(obj: T) {
	return JSON.parse(JSON.stringify(obj)) as T;
}
type TFile = File;
type TFlatFolder = FlatFolder;
type TFlatProject = FlatProject;
type TFlatFileSystem = FlatProject["fileSystem"];
type TFlatProjects = FlatProjects;
export type TObjectId = Types.ObjectId;
export type {
	TFile,
	TFlatFileSystem,
	TFlatFolder,
	TFlatProject,
	TFlatProjects,
};
export default db_projects;
