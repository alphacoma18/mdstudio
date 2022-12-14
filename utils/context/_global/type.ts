import { Session } from "next-auth/core/types";
export interface IContextGlobal {
	url: {
		client: string;
		server: string;
	};
	session: Session | null;
	status: "authenticated" | "unauthenticated" | "loading";
	isLightTheme: boolean;
	setIsLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
	isMobile: boolean;
}
