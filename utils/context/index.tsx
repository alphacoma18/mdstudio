import Theme from "../../styles/themes";
import React, { useEffect, useState } from "react";
interface IGlobalContext {
	characterCount: number;
	wordCount: number;
	handleCount: (text: string) => void;
	isLightTheme: boolean;
	handleTheme: () => void;
	screenWidth: number;
}
const GlobalContext = React.createContext<IGlobalContext>({
	characterCount: 0,
	wordCount: 0,
	handleCount() {},
	isLightTheme: true,
	handleTheme() {},
	screenWidth: 0,
});
export default GlobalContext;

interface Props {
	children: React.ReactNode;
}
function getBreakpoint(width: number) {
	if (width <= 480) return 1;
	if (width <= 768) return 2;
	if (width <= 1024) return 3;
	return 4;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
	const [screenWidth, setScreenWidth] = useState<number>(0);
	let initialTheme: boolean = false;
	useEffect(() => {
		if (typeof window !== "undefined") {
			initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
			setScreenWidth(getBreakpoint(window.innerWidth));
		}
	}, []);

	const [characterCount, setCharacterCount] = useState<number>(0);
	const [wordCount, setWordCount] = useState<number>(0);
	const [isLightTheme, setIsLightTheme] = useState<boolean>(initialTheme);
	function handleCount(text: string) {
		setCharacterCount(text.length);
		setWordCount(text.split(/\S+/).length - 1);
	}
	function handleTheme() {
		setIsLightTheme((prev) => !prev);
		console.log(screenWidth);
	}

	return (
		<GlobalContext.Provider
			value={{
				characterCount,
				wordCount,
				handleCount,
				isLightTheme,
				handleTheme,
				screenWidth,
			}}
		>
			<Theme theme={isLightTheme} />
			{children}
		</GlobalContext.Provider>
	);
};
