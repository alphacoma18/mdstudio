import { NextApiRequest, NextApiResponse } from "next";
import DB_ACCOUNT, { AccountSchema } from "../../../utils/db/account";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
        const { credential, email } = req.body;
        if (!credential || !email) throw "Error: Missing Credentials";
        const response: AccountSchema | null = await DB_ACCOUNT.findOne({ $or: [{ username: credential }, { email: credential }] })
        if (!response) throw "Error: Account does not exist";
        if (response.email !== email) throw "Error: Email does not match";

    } catch (err: any) {
        res.json({ err });
    }
}