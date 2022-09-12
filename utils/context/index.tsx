import Theme from "../../styles/themes";
import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Axios } from "axios";
interface IGlobalContext {
	characterCount: number;
	wordCount: number;
	handleCount: (text: string) => void;
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
	characterCount: 0,
	wordCount: 0,
	handleCount() {},
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

	const [characterCount, setCharacterCount] = useState<number>(0);
	const [wordCount, setWordCount] = useState<number>(0);
	const [isLightTheme, setIsLightTheme] = useState<boolean>(initialTheme);
	function handleCount(text: string) {
		setCharacterCount(text.length);
		setWordCount(text.split(/\S+/).length - 1);
	}
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
	async function handleAxios(api: string, method: string, ...rest: any) {
		if (method === "GET") return await axios.get(api);
		if (method === "POST") return await axios.post(api, rest[0]);
	}

	return (
		<GlobalContext.Provider
			value={{
				characterCount,
				wordCount,
				handleCount,
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
