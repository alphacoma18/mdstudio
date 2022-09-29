import jwt from "jsonwebtoken";
import { IVerifyVerificationToken } from "./interface";
export const generateVerificationToken = (payload: IVerifyVerificationToken) => {
	return jwt.sign(payload, process.env.VERIFICATION_SECRET!, {
		expiresIn: "1d",
	});
};

export const verifyVerificationToken = (token: string) => {
	const payload = jwt.verify(
		token,
		process.env.VERIFICATION_SECRET!
	) as IVerifyVerificationToken;
	return { username: payload.username, email: payload.email };
};
