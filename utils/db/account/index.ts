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
export interface AccountSchema {
	username: string;
	email: string;
	password: string;
	creation_date: Date;
	files: FileSchema;
}
const accountSchema = new Schema<AccountSchema>({
	username: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 60,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		minlength: 10,
		maxlength: 60,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 60,
		maxlength: 60,
	},
	creation_date: {
		type: Date,
		required: true,
	},
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
const DB_ACCOUNT =
	mongoose.models.AccountSchema ||
	model<AccountSchema>("AccountSchema", accountSchema);

run().catch((err) => console.log(err));
async function run() {
	await connect(process.env.MONGO_URI!, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	} as ConnectOptions);
	console.log("Connected to Distribution API Database - Initial Connection");
}
run();

export default DB_ACCOUNT;
