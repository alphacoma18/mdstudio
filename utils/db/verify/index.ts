import mongoose, { connect, ConnectOptions, model, Schema } from "mongoose";

export interface VerifySchema {
	username: string;
	email: string;
	password: string;
	creation_date: Date;
}
const verifySchema = new Schema<VerifySchema>({
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
});
const DB_VERIFY =
	mongoose.models.VerifySchema ||
	model<VerifySchema>("VerifySchema", verifySchema);

run().catch((err) => console.log(err));
async function run() {
	await connect(process.env.MONGO_URI!, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	} as ConnectOptions);
	console.log("Connected to Distribution API Database - Initial Connection");
}
run();

export default DB_VERIFY;
