import mongoose, { connect, ConnectOptions, model, Schema } from "mongoose";

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
	Meta: {
		title?: string;
		icon?: string;
		description?: string;
	};
}
export interface ProjectSchema {
	_id: string;
	settings: ProjectSettingSchema;
	fileStructure: FSSchema;
}

export interface ProjectSchema {
	id: string;
	projects: ProjectSchema[];
}

const x = new Schema<ProjectSchema>({
	id: {
		type: String,
		required: true,
	},
	projects: [
		{
			_id: {
				type: String,
				required: true,
			},
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

const DB_PROJECTS =
	mongoose.models.projects || model<ProjectSchema>("projects", x);

run().catch((err) => console.log(err));
async function run() {
	await connect(process.env.MONGO_URI!, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	} as ConnectOptions);
	console.log("Connected to Distribution API Database - Initial Connection");
}
run().catch((err) => console.log(err));

export default DB_PROJECTS;
