import { createContext, ReactNode, useEffect, useState } from "react";
import Theme from "../../styles/themes";
import { IContextGlobal, User } from "./interface";

const ContextGlobal = createContext<IContextGlobal>({
	isLightTheme: true,
	setIsLightTheme() {},
	user: {} as User,
	setUser() {},
	isMobile: false,
});
export default ContextGlobal;

interface Props {
	children: ReactNode;
}
export const ContextProviderGlobal: React.FC<Props> = ({ children }) => {
	const [isLightTheme, setIsLightTheme] = useState<boolean>(() => {
		const value =
			typeof window !== "undefined" && window.localStorage.getItem("theme");
		return value ? value === "light" : false;
	});

	useEffect(() => {
		if (isLightTheme) return localStorage.setItem("theme-preference", "light");
		if (!isLightTheme) return localStorage.setItem("theme-preference", "dark");
	}, [isLightTheme]);
	
	const [isMobile] = useState<boolean>(() => {
		const value =
			typeof window !== "undefined" && window.innerWidth > 768
				? "live"
				: "edit";
		return value === "edit";
	});

	const [user, setUser] = useState<User>({} as User);
	return (
		<ContextGlobal.Provider
			value={{
				isLightTheme,
				setIsLightTheme,
				user,
				setUser,
				isMobile,
			}}
		>
			<Theme theme={isLightTheme} />
			{children}
		</ContextGlobal.Provider>
	);
};
