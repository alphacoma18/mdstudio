import { getModelForClass, prop } from "@typegoose/typegoose";
import type { Types } from "mongoose";
import { Schema } from "mongoose";
// Interface representing a document in MongoDB.

class User {
	@prop()
	_id!: Types.ObjectId;

	@prop()
	__v!: string;

	@prop()
	id!: string;

	@prop()
	name!: string | null;

	@prop()
	email!: string | null;

	@prop()
	emailVerified!: Date | null;

	@prop()
	image!: string | null;
}
// interface User {}
class Account {
	@prop()
	_id!: Types.ObjectId;

	@prop()
	__v!: string;

	@prop()
	id!: string;

	@prop()
	type!: string;

	@prop()
	provider!: string;

	@prop()
	providerAccountId!: string;

	@prop()
	refresh_token!: string;

	@prop()
	access_token!: string | null;

	@prop()
	expires_at!: number | null;

	@prop()
	token_type!: string | null;

	@prop()
	scope!: string;

	@prop()
	id_token!: string;

	@prop()
	userId!: Types.ObjectId;

	@prop()
	oauth_token_secret!: string;

	@prop()
	oauth_token!: string;

	@prop()
	session_state!: string;
}

class Session {
	@prop()
	_id!: Types.ObjectId;

	@prop()
	__v!: string;

	@prop()
	id!: string;

	@prop()
	expires!: Date;

	@prop()
	sessionToken!: string;

	@prop()
	userId!: Types.ObjectId;
}

class VerificationToken {
	@prop()
	_id!: Types.ObjectId;

	@prop()
	__v!: string;

	@prop()
	token!: string;

	@prop()
	expires!: Date;

	@prop()
	identifier!: string;
}
const db_user = getModelForClass(User);
const db_account = getModelForClass(Account);
const db_session = getModelForClass(Session);
const db_token = getModelForClass(VerificationToken);

export { db_user, db_account, db_session, db_token };
