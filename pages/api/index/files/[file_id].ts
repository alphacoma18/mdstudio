import { NextApiRequest, NextApiResponse } from "next";
import DB_USER, { FileSchema, genObjectId } from "../../../../utils/db/account";
import { UserSchema } from "../../../../utils/db/account/index";
import { verifyAccessToken } from "../../../../utils/gen/jwt";
interface Body {
	file_name: string;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { file_id } = req.query;
		const { file_name }: Body = req.body;
		const { access_token } = req.cookies;
		if (!access_token) throw "No access token";
		const data = verifyAccessToken(access_token);
		if (!data) throw "Invalid access token";
		const { _id, username } = data;
		if (req.method === "GET") {
			const account: FileSchema | null = await DB_USER.findOne(
				{ _id, username },
				{ files: 1 }
			);
			res.json({ files: account?.files });
		}
		if (req.method === "POST") {
			let account: FileSchema | null = await DB_USER.findOneAndUpdate(
				{
					_id,
					username,
					[`files.${file_id}`]: { $exists: true },
				},
				{
					$set: {
						[`files.${file_id}.file_name`]: file_name,
					},
				},
				{ new: true, upsert: false, useFindAndModify: false }
			);
			if (!account) {
				const fn = genObjectId().toString();
				// if file does not exist, then create new file
				account = await DB_USER.findOneAndUpdate(
					{
						_id,
						username,
					},
					{
						$set: {
							[`files.${fn}`]: {
								file_name,
								creation_date: new Date(),
								isPublished: false,
								content: file_name,
							},
						},
					},
					{ new: true, upsert: true }
				);
			}
			res.status(200).json({ files: account?.files });
		}
		if (req.method === "DELETE") {
			const account: UserSchema | null = await DB_USER.findOneAndUpdate(
				{
					_id,
					username,
					[`files.${file_id}`]: { $exists: true },
				},
				{
					$unset: {
						[`files.${file_id}`]: "",
					},
				},
				{ new: true, upsert: false, useFindAndModify: false }
			);
			res.status(200).json({ files: account?.files });
		}
	} catch (err: any) {
		res.json({ err });
	}
}
