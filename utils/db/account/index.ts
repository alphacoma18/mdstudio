import mongoose, { connect, ConnectOptions, model, Schema } from "mongoose";

export interface FSSchema {
	_isDir: true;
	_files: {
		[key: string]: {
			_isDir: false;
			_content: string;
		};
	};
	_folders: {
		[key: string]: FSSchema | {};
	};
}
interface ProjectSettingSchema {
	UI: {
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
	Functionality: {
		autosave?: boolean;
		smoothScroll?: boolean;
		horizontalScroll?: boolean;
		googleTranslate?: boolean;
	};
}
export interface ProjectSchema {
	settings: ProjectSettingSchema;
	fileStructure: FSSchema;
}

export interface UserSchema {
	creation_date: Date;
	projects: ProjectSchema[];
}
const userSchema = new Schema<UserSchema>({});
const DB_USER =
	mongoose.models.AccountSchema ||
	model<UserSchema>("AccountSchema", userSchema);

// run().catch((err) => console.log(err));
async function run() {
	await connect(process.env.MONGO_URI!, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	} as ConnectOptions);
	console.log("Connected to Distribution API Database - Initial Connection");
}
run().catch((err) => console.log(err));

export default DB_USER;
