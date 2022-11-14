import mongoose, { connect, ConnectOptions, model, Schema } from "mongoose";

export const genObjectId = () => new mongoose.Types.ObjectId();

interface ProjectSettingSchema {
	UI: {
		scrollIndicator?: boolean;
		backToTop?: boolean;
		width?: {
			min?: string;
			max?: string;
		}
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
	};
}
interface ProjectSchema {
	file_id: string;
	settings: ProjectSettingSchema;
}

export interface UserSchema {
	creation_date: Date;
	files: ProjectSchema[];
}
const userSchema = new Schema<UserSchema>({});
const DB_USER =
	mongoose.models.AccountSchema ||
	model<UserSchema>("AccountSchema", userSchema);

run().catch((err) => console.log(err));
async function run() {
	await connect(process.env.MONGO_URI!, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	} as ConnectOptions);
	console.log("Connected to Distribution API Database - Initial Connection");
}
run();

export default DB_USER;
