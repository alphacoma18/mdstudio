import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { connect, ConnectOptions, Types } from "mongoose";

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
export function mongooseId(id: string) {
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
