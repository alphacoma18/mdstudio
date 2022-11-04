import mongoose, { connect, ConnectOptions, model, Schema } from "mongoose";

export const genObjectId = () => new mongoose.Types.ObjectId();
export type _ID = string;
export interface FileSchema {
	[file_id: _ID]: {
		file_name: string;
		creation_date: Date;
		isPublished: boolean;
		content: string;
	};
}
const x: FileSchema = {
	["s"]: {
		file_name: "s",
		creation_date: new Date(),
		isPublished: true,
		content: "s",
	},
};
export interface UserSchema {
	name: string;
	email: string;
	password: string;
	creation_date: Date;
	files: FileSchema;
}
const userSchema = new Schema<UserSchema>({

	files: {
		type: Schema.Types.Map,
		unique: true,
		of: {
			file_name: {
				type: String,
				required: true,
				minlength: 4,
				maxlength: 60,
				unique: true,
				index: true,
			},
			creation_date: {
				type: Date,
				required: true,
			},
			isPublished: {
				type: Boolean,
				required: true,
			},
			content: {
				type: String,
				required: true,
			},
		},
	},
});
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
