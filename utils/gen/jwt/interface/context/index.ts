import { Types } from "mongoose";
import { FileSchema } from "../../../../db/account";
export interface JWTAccessToken {
	_id: Types.ObjectId;
	username: string;
}
