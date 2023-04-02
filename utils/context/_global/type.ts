import { Session } from "next-auth/core/types";
export interface IContextGlobal {
	url: {
		client: string;
		server: string;
	};
	session: Session | null;
	isLightTheme: boolean;
	setIsLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
	device: {
		type: "mobile" | "tablet" | "laptop" | "desktop";
		isHandheld: boolean;
	};
}
