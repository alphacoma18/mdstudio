import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

class File {
	@prop({ index: true })
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
	@prop({ index: true })
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
	@prop({ index: true })
	_id!: Types.ObjectId;

	@prop()
	projectName!: string;

	@prop()
	projectDescription!: string;

	@prop()
	isPublished!: boolean;

	@prop({})
	fileSystem!: (File | FlatFolder)[];
}

@modelOptions({ options: { allowMixed: 0 } })
class FlatProjects {
	@prop({ type: Types.ObjectId, ref: "users", index: true })
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
