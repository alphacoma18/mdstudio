import mongoose, { ConnectOptions, Schema, Types, model } from "mongoose";

export interface FSSchema {
	_isDir: true;
	_files: {
		[key: string]: {
			_isDir: false;
			_content: string;
			_title: string;
			_description: string;
		};
	};
	_folders: {
		[key: string]: FSSchema | Record<string, never>;
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
	Meta: {
		title?: string;
		icon?: string;
		description?: string;
	};
}
export interface ProjectSchema {
	settings: ProjectSettingSchema;
	fileStructure: FSSchema;
}

export interface UserSchema {
	userId: Types.ObjectId;
	projects: ProjectSchema[];
}

const x = new Schema<UserSchema>({
	userId: { type: Schema.Types.ObjectId, ref: "users" },
	projects: [
		{
			settings: {
				UI: {
					scrollIndicator: {
						type: Boolean,
						required: false,
					},
					backToTop: {
						type: Boolean,
						required: false,
					},
					width: {
						min: {
							type: String,
							required: false,
						},
						max: {
							type: String,
							required: false,
						},
					},
					theme: {
						bg1: {
							type: String,
							required: false,
						},
						bg2: {
							type: String,
							required: false,
						},
						bg3: {
							type: String,
							required: false,
						},
						color: {
							type: String,
							required: false,
						},
						font: {
							type: String,
							required: false,
						},
					},
				},
				Functionality: {
					autosave: {
						type: Boolean,
						required: false,
					},
					smoothScroll: {
						type: Boolean,
						required: false,
					},
					horizontalScroll: {
						type: Boolean,
						required: false,
					},
					googleTranslate: {
						type: Boolean,
						required: false,
					},
				},
				Meta: {
					title: {
						type: String,
						required: false,
					},
					icon: {
						type: String,
						required: false,
					},
					description: {
						type: String,
						required: false,
					},
				},
			},
			fileStructure: {
				_isDir: {
					type: Boolean,
					required: true,
				},
				_files: {
					type: Object,
					required: false,
				},
				_folders: {
					type: Object,
					required: false,
				},
			},
		},
	],
});
export function mongooseId(id: string) {
	return new mongoose.Types.ObjectId(id);
}
const DB_PROJECTS =
	mongoose.models.projects ?? model<UserSchema>("projects", x);
DB_PROJECTS;

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

export default DB_PROJECTS;
