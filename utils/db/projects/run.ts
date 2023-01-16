import { connect, ConnectOptions } from "mongoose";
async function run() {
	try {
		await connect(process.env.MONGO_URI ?? "", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			minPoolSize: 10,
		} as ConnectOptions);
	} catch (error) {
		console.error(error);
	}
}
void run();
