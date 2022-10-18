import jwt from "jsonwebtoken";
import { JWTAccessToken } from "./interface/context";
import { JWTVerificationToken } from "./interface/verify";

export const generateVerificationToken = (payload: JWTVerificationToken) => {
	return jwt.sign(payload, process.env.VERIFICATION_SECRET!, {
		expiresIn: "1d",
	});
};

export const verifyVerificationToken = (token: string) => {
	const payload = jwt.verify(
		token,
		process.env.VERIFICATION_SECRET!
	) as JWTVerificationToken;
	return { username: payload.username, email: payload.email };
};

export const generateAccessToken = (payload: JWTAccessToken) => {
	return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
		expiresIn: "15m",
	});
};

export const verifyAccessToken = (token: string) => {
	const payload = jwt.verify(
		token,
		process.env.ACCESS_TOKEN_SECRET!
	) as JWTAccessToken;
	return { _id: payload._id, username: payload.username, files: payload.files };
};
