import React, { useEffect, useState } from "react";

import Theme from "../../styles/themes";

interface IGlobalContext {
	isLightTheme: boolean;
	handleTheme: () => void;
	leftBarOpen: boolean;
	rightBarOpen: boolean;
	handleLeftBarOpen: () => void;
	handleRightBarOpen: () => void;
	explorerOpen: boolean;
	handleExplorerOpen: () => void;
}
const GlobalContext = React.createContext<IGlobalContext>({
	isLightTheme: true,
	handleTheme() {},
	leftBarOpen: false,
	rightBarOpen: false,
	handleLeftBarOpen() {},
	handleRightBarOpen() {},
	explorerOpen: false,
	handleExplorerOpen() {},
});
export default GlobalContext;

interface Props {
	children: React.ReactNode;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
	const [leftBarOpen, setLeftBarOpen] = useState<boolean>(false);
	const [rightBarOpen, setRightBarOpen] = useState<boolean>(false);
	const [explorerOpen, setExplorerOpen] = useState<boolean>(false);

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
	function handleLeftBarOpen() {
		setLeftBarOpen((prev) => !prev);
	}
	function handleRightBarOpen() {
		setRightBarOpen((prev) => !prev);
	}
	function handleExplorerOpen() {
		setExplorerOpen((prev) => !prev);
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
				leftBarOpen,
				rightBarOpen,
				handleLeftBarOpen,
				handleRightBarOpen,
				explorerOpen,
				handleExplorerOpen,
			}}
		>
			<Theme theme={isLightTheme} />
			{children}
		</GlobalContext.Provider>
	);
};
