import React, { useEffect, useState } from "react";
import Theme from "../../styles/themes";

interface IGlobalContext {
	isLightTheme: boolean;
	handleTheme: () => void;
}
const GlobalContext = React.createContext<IGlobalContext>({
	isLightTheme: true,
	handleTheme() {},
});
export default GlobalContext;

interface Props {
	children: React.ReactNode;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
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

	return (
		<GlobalContext.Provider
			value={{
				isLightTheme,
				handleTheme,
			}}
		>
			<Theme theme={isLightTheme} />
			{children}
		</GlobalContext.Provider>
	);
};
