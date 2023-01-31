import { authOptions, getServerSession } from "@/serverSession";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import GenError from "utils/gen/error";

const serverWrapper = (
	fn: (
		req: NextApiRequest,
		res: NextApiResponse,
		session: Session | null
	) => Promise<void>
) => {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			const session = await getServerSession(req, res, authOptions);
			await fn(req, res, session);
		} catch (e) {
			console.log(e);
			if (e instanceof GenError)
				res.status(e.status).json({ error: e.message });
			else res.status(500).json({ error: "Internal Server Error" });
		} finally {
			if (!res.headersSent) res.status(405).send("Method Not Allowed");
		}
	};
};
export default serverWrapper;
