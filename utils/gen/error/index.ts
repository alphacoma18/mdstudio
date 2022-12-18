export default class MyError extends Error {
	status: number;
	constructor(msg: string | undefined, status = 500) {
		super(msg);
		this.status = status;
	}
}
