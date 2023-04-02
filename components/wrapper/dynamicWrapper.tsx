import dynamic from "next/dynamic";
const dynamicWrapper = (fn: () => Promise<any>): any => {
	return dynamic(fn, {
		loading: () => <p>Loading...</p>,
		ssr: false,
	});
};

export default dynamicWrapper;
