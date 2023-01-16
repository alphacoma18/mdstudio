/**
 * The adapter utility folder is a modified version of the npm package
 * @choutkamartin/next-auth-mongoose by @choutkamartin.
 * https://www.npmjs.com/package/@choutkamartin/mongoose-adapter
 *
 * We have modified the said adapter to work with Typegoose and expose the
 * other models to the rest of the application. As of now, the adapter
 * is embedded in the project, but we will be publishing it as a separate
 * package as a fork in the future.
 *
 * Important:
 * 1. the `userId` field is a custom defined field and therefore must be
 * initialized every instance.
 * 2. The `_id` field is a built-in field yet typegoose does not auto-generate an
 * an ObjectID for any create, insert, or push. Therefore, we must manually
 * create it using the utility function `mongooseId`.
 */

import { ConnectOptions, ObjectId } from "mongodb";
import { connect } from "mongoose";
import type {
	Adapter,
	AdapterAccount,
	AdapterSession,
	AdapterUser,
	VerificationToken,
} from "next-auth/adapters";
import { mongooseId } from "../db/projects/flat";
import { db_account, db_session, db_token, db_user } from "./models";
export const format = {
	/** Takes a mongoDB object and returns a plain old JavaScript object */
	from<T = Record<string, unknown>>(object: Record<string, any>): T {
		const newObject: Record<string, unknown> = {};
		for (const key in object) {
			const value = object[key];
			if (key === "_id") {
				newObject.id = value.toHexString();
			} else if (key === "userId") {
				newObject[key] = value.toHexString();
			} else if (key !== "__v") {
				newObject[key] = value;
			}
		}
		return newObject as T;
	},
};

/** Converts from string to ObjectId */
export function _id(hex?: string) {
	if (hex?.length !== 24) return new ObjectId();
	return new ObjectId(hex);
}

export function TypegooseAdapter(): Adapter {
	const { from } = format;
	const userId = mongooseId();
	return {
		async createUser(data) {
			const user = await db_user.create({
				_id: userId,
				...data,
			});
			return from<AdapterUser>(user);
		},
		async getUser(id) {
			try {
				const user = await db_user.findById(id).lean();
				if (!user) return null;
				return from<AdapterUser>(user);
			} catch (err) {
				return null;
			}
		},
		async getUserByEmail(email) {
			const user = await db_user.findOne({ email }).lean();
			if (!user) return null;
			return from<AdapterUser>(user);
		},
		async getUserByAccount(data) {
			const account = await db_account.findOne(data);
			if (!account) return null;
			const user = await db_user.findById(account.userId).lean();
			if (!user) return null;
			return from<AdapterUser>(user);
		},
		async updateUser(data) {
			const user = await db_user
				.findByIdAndUpdate(data.id, { name: data.name }, { new: true })
				.exec();
			if (!user) console.error("User not found");
			return from<AdapterUser>(user!);
		},
		async deleteUser(id) {
			await Promise.all([
				db_account.deleteMany({ userId: id }),
				db_session.deleteMany({ userId: id }),
				db_user.findByIdAndDelete(id),
			]);
		},
		async linkAccount(data) {
			const account = await db_account.create({
				_id: mongooseId(),
				...data,
				userId,
			});
			return from<AdapterAccount>(account);
		},
		async unlinkAccount(data) {
			const account = await db_account.findOneAndDelete(data);
			if (!account) console.error("User not found");
			return from<AdapterAccount>(account!);
		},
		async getSessionAndUser(sessionToken) {
			const session = await db_session
				.findOne({
					sessionToken: sessionToken,
				})
				.lean();
			if (!session) return null;
			const user = await db_user.findById(session.userId).lean();
			if (!user) return null;
			return {
				user: from<AdapterUser>(user),
				session: from<AdapterSession>(session),
			};
		},
		async createSession(data) {
			const session = await db_session.create({
				_id: mongooseId(),
				...data,
				userId,
			});
			return from<AdapterSession>(session);
		},
		async updateSession(data) {
			const session = await db_session.findOneAndUpdate({
				sessionToken: data.sessionToken,
				expires: data.expires,
			});
			const x: AdapterSession = {
				sessionToken: session?.sessionToken ?? "",
				userId: session?.userId.toHexString() ?? "",
				expires: session?.expires as Date,
			};
			return from<AdapterSession>(x);
		},
		async deleteSession(sessionToken) {
			const session = await db_session.findOneAndDelete({
				sessionToken: sessionToken,
			});
			const x: AdapterSession = {
				sessionToken: session?.sessionToken ?? "",
				userId: session?.userId.toHexString() ?? "",
				expires: session?.expires as Date,
			};
			return from<AdapterSession>(x);
		},
		async createVerificationToken(data) {
			const verificationToken = await db_token.create({
				_id: mongooseId(),
				...data,
			});
			return from<VerificationToken>(verificationToken);
		},
		async useVerificationToken(data) {
			const verificationToken = await db_token.findOneAndDelete(data).lean();
			if (!verificationToken) return null;
			const { _id, __v, ...rest } = verificationToken;
			return rest;
		},
	};
}
