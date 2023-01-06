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
		client: "http://localhost:3000",
		server: "http://localhost:3000/api",
	};
	const { data: session } = useSession();

	const [isLightTheme, setIsLightTheme] = useState<boolean>(() => {
		const value =
			typeof window !== "undefined" &&
			window.localStorage.getItem("theme-preference");
		return value === "light";
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

	const [device] = useState<IContextGlobal["device"]>(() => {
		if (typeof window === "undefined") return "desktop";
		const width = window.innerWidth;
		if (width <= 480) return "mobile";
		if (width <= 768) return "tablet";
		if (width <= 1024) return "laptop";
		return "desktop";
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
