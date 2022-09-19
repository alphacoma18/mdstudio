import mongoose, { connect, ConnectOptions, model, Schema } from "mongoose";

export interface AccountSchema {
	email: string;
	password: string;
	creation_date: Date;
}
const accountSchema = new Schema<AccountSchema>({
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
		minlength: 10,
		maxlength: 30,
	},
	creation_date: {
		type: Date,
		required: true,
	},
});
const MyMD =
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

export default MyMD;
