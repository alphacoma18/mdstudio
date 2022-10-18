import { NextApiRequest, NextApiResponse } from "next";
import DB_ACCOUNT, { genObjectId } from "../../../../utils/db/account";
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
		console.log("File ID: ", file_id);
		let files;
		files = await DB_ACCOUNT.findOneAndUpdate(
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
		if (!files) {
			const fn = genObjectId().toString();
			// if file does not exist, then create new file
			files = await DB_ACCOUNT.findOneAndUpdate(
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
							content: "",
						},
					},
				},
				{ new: true, upsert: true }
			);
		}
		console.log("X: ", files);

		res.status(204).json({ files });
	} catch (err: any) {
		res.json({ err });
	}
}
