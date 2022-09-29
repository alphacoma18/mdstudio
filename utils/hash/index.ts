import bcrypt from "bcrypt";
export async function hash(password: string) {
	return await bcrypt.hash(password, 10);
}
export async function unHash(password: string, input_password: string) {
	return await bcrypt.compare(password, input_password);
}
