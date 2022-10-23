import { createContext, ReactNode, useEffect, useState } from "react";
import Theme from "../../styles/themes";
import { IContextGlobal, User } from "./interface";

const ContextGlobal = createContext<IContextGlobal>({
	isLightTheme: true,
	handleTheme() {},
	user: {} as User,
	setUser() {},
});
export default ContextGlobal;

interface Props {
	children: ReactNode;
}
export const ContextProviderGlobal: React.FC<Props> = ({ children }) => {
	const [isLightTheme, setIsLightTheme] = useState<boolean>(() => {
		if (typeof window !== "undefined") {
			const theme = localStorage.getItem("theme-preference");
			if (theme === "light") return true;
			return false;
		}
		return true;
	});

	function handleTheme() {
		setIsLightTheme((prev) => !prev);
	}
	useEffect(() => {
		if (isLightTheme) return localStorage.setItem("theme-preference", "light");
		if (!isLightTheme) return localStorage.setItem("theme-preference", "dark");
	}, [isLightTheme]);

	const [user, setUser] = useState<User>({} as User);
	return (
		<ContextGlobal.Provider
			value={{
				isLightTheme,
				handleTheme,
				user,
				setUser,
			}}
		>
			<Theme theme={isLightTheme} />
			{children}
		</ContextGlobal.Provider>
	);
};
