import { authOptions } from "@/serverSession";
import { GetServerSidePropsContext } from "next";
import { Session, getServerSession } from "next-auth";
import GenError from "utils/gen/error";
const ssrWrapper = (
	fn: (context: GetServerSidePropsContext, session: Session) => Promise<any>
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
			console.error(e);
			if (e instanceof GenError) console.error(e.message);

			// update: no longer redirecting to signin page because anonymous users can access the site
			//
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
