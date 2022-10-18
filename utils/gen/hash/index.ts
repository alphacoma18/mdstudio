import bcrypt from "bcrypt";
export async function hash(password: string) {
	return await bcrypt.hash(password, 10);
}
export async function unHash(input_password: string, hashed_password: string) {
	return await bcrypt.compare(input_password, hashed_password);
}
