import React, { useState } from "react";
interface IGlobalContext {
	characterCount: number;
	wordCount: number;
	handleCount: (text: string) => void;
}
const GlobalContext = React.createContext<IGlobalContext>({
	characterCount: 0,
	wordCount: 0,
	handleCount() {},
});
export default GlobalContext;

interface Props {
	children: React.ReactNode;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
	const [characterCount, setCharacterCount] = useState<number>(0);
	const [wordCount, setWordCount] = useState<number>(0);
	function handleCount(text: string) {
		setCharacterCount(text.length);
		setWordCount(text.split(/\S+/).length - 1);
	}

	return (
		<GlobalContext.Provider
			value={{
				characterCount,
				wordCount,
				handleCount,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
