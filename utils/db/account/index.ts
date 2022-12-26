import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { ConnectOptions, Types, connect } from "mongoose";

// Note:
// 1. _id is now statically defined in each model that needs them
// since pushing a new file/folder to the array will not create a new _id
// even though `auto: true` and `strict: false` are set in modelOptions
// refer: https://stackoverflow.com/questions/48176855/mongoose-findoneandupdate-upsert-doesnt-create-a-new-id
//
// 2. Unfortunately, you can insert fields into the database that are not defined in the model
//
// 3. Defining options such as `required: true`, `default: true`, and `type: <Type>`
// in @props() is useless since it does not work at all.
// Even with `upsert: true` and `setDefaultsOnInsert: true` on the updateOne() method
// refer: https://stackoverflow.com/questions/26865357/default-value-not-set-while-using-update-with-upsert-as-true

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
	title!: string;

	@prop()
	description!: string;
}

@modelOptions({ options: { allowMixed: 0 } })
class FileSystem {
	@prop()
	_id!: Types.ObjectId;

	@prop()
	folderName!: string;

	@prop()
	isDir!: true;

	@prop()
	files!: File[] | [];

	@prop()
	folders!: FileSystem[] | [];
}

class Theme {
	@prop()
	bg1!: string;

	@prop()
	bg2!: string;

	@prop()
	bg3!: string;

	@prop()
	color!: string;

	@prop()
	font!: string;
}

@modelOptions({ options: { allowMixed: 0 } })
class UI {
	@prop()
	scrollIndicator!: boolean;

	@prop()
	backToTop!: boolean;

	@prop()
	theme!: Theme;
}

@modelOptions({ options: { allowMixed: 0 } })
class Setting {
	@prop()
	ui!: UI;

	// @prop()
	// Functionality!: {
	// 	autosave?: boolean;
	// 	smoothScroll?: boolean;
	// 	horizontalScroll?: boolean;
	// 	googleTranslate?: boolean;
	// };

	// @prop()
	// Meta!: {
	// 	title?: string;
	// 	icon?: string;
	// 	description?: string;
	// };
}

@modelOptions({ options: { allowMixed: 0 } })
class Project {
	@prop()
	_id!: Types.ObjectId;

	@prop()
	projectName!: string;

	@prop()
	projectDescription!: string;

	@prop()
	settings!: Setting;

	@prop()
	fileSystem!: FileSystem;
}

@modelOptions({ options: { allowMixed: 0 } })
class Projects {
	@prop({ type: Types.ObjectId, ref: "users" })
	userId!: Types.ObjectId;

	@prop()
	projects!: Project[] | [];
}

const db_projects = getModelForClass(Projects);

// converts string to ObjectId or creates a new one
export function mongooseId(id?: string) {
	return new Types.ObjectId(id);
}
type TFile = File;
type TProject = Project;
type TProjects = Projects;
type TProjectSetting = Setting;
type TFileSystem = FileSystem;
export type { TFile, TProject, TProjects, TProjectSetting, TFileSystem };
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
