import { useSession } from "next-auth/react";
import { ReactNode, createContext, useEffect, useState } from "react";
import Theme from "../../../styles/themes";
import { IContextGlobal } from "./type";
const ContextGlobal = createContext<IContextGlobal>({} as IContextGlobal);
export default ContextGlobal;

interface Props {
	children: ReactNode;
}
export const ContextProviderGlobal: React.FC<Props> = ({ children }) => {
	const url: IContextGlobal["url"] = {
		client: "https://anymd.vercel.app",
		server: "https://anymd.vercel.app/api",
	};
	const { data: session } = useSession();

	const [isLightTheme, setIsLightTheme] = useState<boolean>(() => {
		if (typeof window === "undefined") return true;
		const value =
			typeof window !== "undefined" &&
			window.localStorage.getItem("theme-preference");
		if (value === "dark") return false;
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) return false;
		if (window.matchMedia("(prefers-color-scheme: light)").matches) return true;
		return true;
	});

	useEffect(() => {
		setIsLightTheme((prev) => {
			if (typeof window !== "undefined") {
				window.localStorage.setItem(
					"theme-preference",
					prev ? "light" : "dark"
				);
			}
			return prev;
		});
	}, [isLightTheme]);
	function getDeviceType(
		handheld: IContextGlobal["device"]["type"],
		desktop: IContextGlobal["device"]["type"]
	): IContextGlobal["device"] {
		return {
			type: window.innerWidth <= 768 ? handheld : desktop,
			isHandheld: window.innerWidth <= 768,
		};
	}

	const [device] = useState<IContextGlobal["device"]>(() => {
		if (typeof window === "undefined")
			return {
				type: "desktop",
				isHandheld: false,
			};
		const width = window.innerWidth;
		if (width <= 768) return getDeviceType("mobile", "tablet");
		return getDeviceType("tablet", "desktop");
	});
	return (
		<ContextGlobal.Provider
			value={{
				url,
				session,
				isLightTheme,
				setIsLightTheme,
				device,
			}}
		>
			<Theme theme={isLightTheme} />
			{children}
		</ContextGlobal.Provider>
	);
};
