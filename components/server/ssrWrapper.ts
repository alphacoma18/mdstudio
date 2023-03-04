import { authOptions } from "@/serverSession";
import { GetServerSidePropsContext } from "next";
import { Session, getServerSession } from "next-auth";
import GenError from "utils/gen/error";
const ssrWrapper = (
	fn: (
		context: GetServerSidePropsContext,
		session: Session | null
	) => Promise<any>
) => {
	return async (context: GetServerSidePropsContext) => {
		try {
			const session = await getServerSession(
				context.req,
				context.res,
				authOptions
			);
			if (!session) throw new GenError("Unauthorized", 401);
			return await fn(context, session);
		} catch (e) {
			return {
				redirect: {
					destination: "/auth/signin",
					permanent: false,
				},
			};
		}
	};
};

export default ssrWrapper;
