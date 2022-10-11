import mongoose, { connect, ConnectOptions, model, Schema } from "mongoose";

interface FileSchema {
	file_name: string;
	creation_date: Date;
	isPublished: boolean;
	content: string;
}
export interface AccountSchema {
	username: string;
	email: string;
	password: string;
	creation_date: Date;
	files: FileSchema[];
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
	files: [
		{
			file_name: {
				type: String,
				required: true,
				minlength: 3,
				maxlength: 60,
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
				minlength: 1,
			},
		},
	],
});
const DB_ACCOUNT =
	mongoose.models.AccountSchema ||
	model<AccountSchema>("account_schema", accountSchema);

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
