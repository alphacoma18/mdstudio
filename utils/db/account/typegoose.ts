import { getModelForClass, prop } from "@typegoose/typegoose";
import mongoose, { ConnectOptions, Types } from "mongoose";

class FSClass {
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
		[key: string]: FSClass;
	};
}

// x.create({ _isDir: true, _files: {}, _folders: {} });
// x.findOne({ _folders: true }).then((x) => {
//     console.log(x);
//     x?._folders["test"]._files["test"]._content;
// });

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

class Project {
	@prop({ required: true })
	settings!: ProjectSetting;

	@prop()
	fileStructure!: FSClass;
}

class Projects {
	@prop({ type: Types.ObjectId, ref: "users" })
	userId!: Types.ObjectId;

	@prop({ type: () => [Project] })
	projects!: Project[];
}

const db_projects = getModelForClass(Projects);

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
