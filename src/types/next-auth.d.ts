import { DefaultSession } from "next-auth";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			id: string;
			provider: string;
			name: string;
			email: string;
			image: string;
			userId: string;
		} & DefaultSession["user"];
	}
	/**
	 * The shape of the user object returned in the OAuth providers' `profile` callback,
	 * or the second parameter of the `session` callback, when using a database.
	 */
	interface User extends DefaultSession["user"] {
		displayName: string;
	}
}
