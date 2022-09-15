import Theme from "../../styles/themes";
import axios from "../axios";
import React, { useEffect, useState } from "react";
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
	let initialTheme: boolean = false;
	useEffect(() => {
		if (typeof window !== "undefined") {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
		}
	}, []);

	const [isLightTheme, setIsLightTheme] = useState<boolean>(initialTheme);

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
