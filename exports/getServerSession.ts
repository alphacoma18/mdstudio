import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
export { unstable_getServerSession, authOptions };
