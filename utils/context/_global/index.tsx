import { useSession } from "next-auth/react";
import { createContext, ReactNode, useEffect, useState } from "react";
import Theme from "../../../styles/themes";
import { IContextGlobal } from "./type";
const ContextGlobal = createContext<IContextGlobal>({
	url: {
		client: "",
		server: "",
	},
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
	const url: IContextGlobal["url"] = {
		client: "http://localhost:3000",
		server: "http://localhost:3000/api",
	};
	const { data: session, status } = useSession();

	const [isLightTheme, setIsLightTheme] = useState<boolean>(() => {
		const value =
			typeof window !== "undefined" &&
			window.localStorage.getItem("theme-preference");
		console.log(value);
		return value === "dark";
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
		return typeof window !== "undefined" && window.innerWidth <= 768;
	});
	return (
		<ContextGlobal.Provider
			value={{
				url,
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
