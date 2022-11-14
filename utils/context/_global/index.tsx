import { useSession } from "next-auth/react";
import { createContext, ReactNode, useEffect, useState } from "react";
import Theme from "../../../styles/themes";
import { IContextGlobal } from "./index.d";
const ContextGlobal = createContext<IContextGlobal>({
	clientURL: "",
	serverURL: "",
	session: null,
	status: "loading",
	isLightTheme: true,
	setIsLightTheme() {},
	isMobile: false,
});
export default ContextGlobal;

interface Props {
	children: ReactNode;
}
export const ContextProviderGlobal: React.FC<Props> = ({ children }) => {
	const clientURL = "http://localhost:3000";
	const serverURL = "http://localhost:3000/api";
	const { data: session, status } = useSession();

	const [isLightTheme, setIsLightTheme] = useState<boolean>(() => {
		const value =
			typeof window !== "undefined" &&
			window.localStorage.getItem("theme-preference");
		return value ? value === "dark" : true;
	});

	useEffect(() => {
		setIsLightTheme((prev) => {
			if (typeof window !== "undefined") {
				window.localStorage.setItem(
					"theme-preference",
					prev ? "dark" : "light"
				);
			}
			return prev;
		});
	}, [isLightTheme]);

	const [isMobile] = useState<boolean>(() => {
		const value = typeof window !== "undefined" && window.innerWidth <= 768;
		return value;
	});
	return (
		<ContextGlobal.Provider
			value={{
				clientURL,
				serverURL,
				session,
				status,
				isLightTheme,
				setIsLightTheme,
				isMobile,
			}}
		>
			<Theme theme={isLightTheme} />
			{children}
		</ContextGlobal.Provider>
	);
};
