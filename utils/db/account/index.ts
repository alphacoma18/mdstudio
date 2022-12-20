import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import mongoose, { ConnectOptions, Schema, Types } from "mongoose";

@modelOptions({ options: { allowMixed: 0 } })
class FileSystem {
	@prop()
	_isDir!: true;

	@prop()
	_files?: {
		[key: string]: {
			_isDir: false;
			_content: string;
			_title: string;
			_description: string;
		};
	};

	@prop()
	_folders?: {
		[key: string]: FileSystem;
	};
}

// x.create({ _isDir: true, _files: {}, _folders: {} });
// x.findOne({ _folders: true }).then((x) => {
//     console.log(x);
//     x?._folders["test"]._files["test"]._content;
// });
@modelOptions({ options: { allowMixed: 0 } })
class ProjectSetting {
	@prop()
	UI!: {
		scrollIndicator?: boolean;
		backToTop?: boolean;
		width?: {
			min?: string;
			max?: string;
		};
		theme?: {
			bg1?: string;
			bg2?: string;
			bg3?: string;
			color?: string;
			font?: string;
		};
	};

	@prop()
	Functionality!: {
		autosave?: boolean;
		smoothScroll?: boolean;
		horizontalScroll?: boolean;
		googleTranslate?: boolean;
	};

	@prop()
	Meta!: {
		title?: string;
		icon?: string;
		description?: string;
	};
}

@modelOptions({ options: { allowMixed: 0 } })
class Project {
	@prop({ required: true, type: () => Types.ObjectId, auto: true })
	_id!: Types.ObjectId;

	@prop({ required: true, maxlength: 20, match: /^[A-Za-z][\dA-Za-z]{1,9}$/ })
	projectName!: string;

	@prop()
	settings!: ProjectSetting;

	@prop()
	fileStructure!: FileSystem;
}

@modelOptions({ options: { allowMixed: 0 } })
class Projects {
	@prop({ type: Types.ObjectId, ref: "users" })
	userId!: Types.ObjectId | string;

	@prop({ type: () => [Project], default: [] })
	projects!: Project[];
}

const db_projects = getModelForClass(Projects);
export function mongooseId(id: string) {
	return new mongoose.Types.ObjectId(id);
}
type TProjects = Projects;
type TProject = Project;
type TProjectSetting = ProjectSetting;
type TFileSystem = FileSystem;
export type { TProjects, TProject, TProjectSetting, TFileSystem };

async function run() {
	try {
		await mongoose.connect(
			process.env.MONGO_URI as string,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			} as ConnectOptions
		);
	} catch (error) {
		console.log(error);
	}
}
void run();
export default db_projects;
