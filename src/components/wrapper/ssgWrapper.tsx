import GenError from "@/utils/gen/error";
import { GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

const ssgWrapper = (fn: (params: ParsedUrlQuery) => any) => {
	return async (context: GetStaticPropsContext) => {
		try {
			const params = context.params;
			if (!params) return { notFound: true };
			return await fn(params);
		} catch (e) {
			console.error(e);
			if (e instanceof GenError) console.error(e.message);
		}
	};
};
export default ssgWrapper;
