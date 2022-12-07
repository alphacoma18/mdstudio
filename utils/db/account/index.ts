// import mongoose, { connect, ConnectOptions, model, Schema } from "mongoose";
import { MongoClient } from "mongodb";
if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

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
interface ProjectSchema {
	_id: string;
	settings: ProjectSettingSchema;
	fileStructure: FSSchema;
}

interface UserSchema {
	id: string;
	name?: string;
	email?: string | null | undefined;
	image?: string | null | undefined;
	creation_date: Date;
	projects: ProjectSchema[];
}

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri, options);
clientPromise = client.connect();

clientPromise
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB", err);
	});

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

// const userSchema = new Schema<UserSchema>({
// 	// _id: mongoose.Schema.Types.ObjectId,
// 	// creation_date: {
// 	// 	type: Date,
// 	// 	default: Date.now,
// 	// },
// 	projects: [
// 		{
// 			_id: {
// 				type: String,
// 				required: true,
// 			},
// 			settings: {
// 				UI: {
// 					scrollIndicator: {
// 						type: Boolean,
// 						default: false,
// 					},
// 					backToTop: {
// 						type: Boolean,
// 						default: false,
// 					},
// 					width: {
// 						min: {
// 							type: String,
// 							default: "unset",
// 						},
// 						max: {
// 							type: String,
// 							default: "unset",
// 						},
// 					},
// 					theme: {
// 						bg1: {
// 							type: String,
// 							default: "#ffffff",
// 						},
// 						bg2: {
// 							type: String,
// 							default: "#ffffff",
// 						},
// 						bg3: {
// 							type: String,
// 							default: "#ffffff",
// 						},
// 						color: {
// 							type: String,
// 							default: "#000000",
// 						},
// 						font: {
// 							type: String,
// 							default: "sans-serif",
// 						},
// 					},
// 				},
// 				Functionality: {
// 					autosave: {
// 						type: Boolean,
// 						default: false,
// 					},
// 					smoothScroll: {
// 						type: Boolean,
// 						default: false,
// 					},
// 					horizontalScroll: {
// 						type: Boolean,
// 						default: false,
// 					},
// 					googleTranslate: {
// 						type: Boolean,
// 						default: false,
// 					},
// 				},
// 				Meta: {
// 					title: {
// 						type: String,
// 						default: "Untitled",
// 					},
// 					icon: {
// 						type: String,
// 						default: "https://anymd.vercel.app/favicon.ico",
// 					},
// 					description: {
// 						type: String,
// 						default: "Untitled",
// 					},
// 				},
// 			},
// 			fileStructure: {
// 				_isDir: {
// 					type: Boolean,
// 					default: true,
// 				},
// 				_files: {
// 					type: Object,
// 					default: {},
// 				},
// 				_folders: {
// 					type: Object,
// 					default: {},
// 				},
// 			},
// 		},
// 	],
// });
// const DB_USER =
// 	mongoose.models.AccountSchema ||
// 	model<UserSchema>("AccountSchema", userSchema);

// // run().catch((err) => console.log(err));
// async function run() {
// 	await connect(process.env.MONGO_URI!, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	} as ConnectOptions);
// 	console.log("Connected to Distribution API Database - Initial Connection");
// }
// run().catch((err) => console.log(err));

// export default DB_USER;
