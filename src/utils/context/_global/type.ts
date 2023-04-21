import { Session } from "next-auth/core/types";
export interface IContextGlobal {
	session: Session | null;
	isLightTheme: boolean;
	setIsLightTheme: (value: boolean | ((val: boolean) => boolean)) => void;
	device: {
		type: "mobile" | "tablet" | "laptop" | "desktop";
		isHandheld: boolean;
	};
}
