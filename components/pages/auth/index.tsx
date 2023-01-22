import dynamic from "next/dynamic";

export const AuthForm = dynamic(() => import("./form"), {
	loading: () => <p>Loading...</p>,
	ssr: false,
});
