import { GetStaticPropsContext } from "next";
import GenError from "utils/gen/error";

const ssgWrapper = (fn: (context: GetStaticPropsContext) => any) => {
	return async (context: GetStaticPropsContext) => {
		try {
			return await fn(context);
		} catch (e) {
			console.error(e);
			if (e instanceof GenError) console.error(e.message);
		}
	};
};
export default ssgWrapper;
