import { authOptions, getServerSession } from "@/exports/getServerSession";
import GenError from "@/utils/gen/error";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";

const methods = ["GET", "POST", "PUT", "DELETE"] as const;
type TMethod = (typeof methods)[number];
const serverWrapper = (
	fn: (
		req: NextApiRequest,
		res: NextApiResponse,
		sessionUser: Session["user"],
		method: TMethod,
	) => Promise<void>,
) => {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		try {
			const session = await getServerSession(req, res, authOptions);
			if (!session) throw new GenError("Unauthorized", 401);
			const { user } = session,
				{ method } = req;
			if (!method || !methods.includes(method as TMethod))
				throw new GenError("Method Not Allowed", 405);
			await fn(req, res, user, method as TMethod);
		} catch (e) {
			console.error(e);
			if (e instanceof GenError)
				res.status(e.status).json({ error: e.message });
			else res.status(500).json({ error: "Internal Server Error" });
		} finally {
			if (!res.headersSent) res.status(405).send("Method Not Allowed");
		}
	};
};
export default serverWrapper;
