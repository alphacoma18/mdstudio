import type { MongoClient } from "mongodb";

declare global {
	namespace globalThis {
		// eslint-disable-next-line no-var
		var _mongoClientPromise: Promise<MongoClient>;
	}
	interface Storage extends Storage {
		setObject(key: string, value: any): void;
		getObject(key: string): any;
	}
}

Storage.prototype.setObject = function (key: string, value: any) {
	this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key: string) {
	return JSON.parse(this.getItem(key));
};
