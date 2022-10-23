import { Types } from "mongoose";
export interface JWTAccessToken {
	_id: Types.ObjectId;
	username: string;
}
