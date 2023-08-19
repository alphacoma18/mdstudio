import { MongoClient } from "mongodb";
import mongoose from "mongoose";
const URI = process.env.MONGO_URI;
const options = {
	minPoolSize: 20,
	maxPoolSize: 400,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!URI) throw new Error("Please add your Mongo URI to .env.local");
if (process.env.NODE_ENV === "development") {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	// eslint-disable-next-line @typescript-eslint/no-misused-promises
	if (!global._mongoClientPromise) {
		client = new MongoClient(URI, options);
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(URI, options);
	clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
const isConnectionOpen = mongoose.connection.readyState === 1;
export async function run() {
	try {
		if (!isConnectionOpen) {
			await mongoose.disconnect();
			await mongoose.connect(process.env.MONGO_URI, {
				minPoolSize: 20,
				maxPoolSize: 400,
				appName: "Markdown Studio",
			});
		} else {
			console.info("Connection already open");
		}
		console.info("Connected to MongoDB");
	} catch (error) {
		console.error(error);
	}
}
run();
