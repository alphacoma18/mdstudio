import { createContext, ReactNode, useState } from "react";
import { IContextIndex } from "./index.d";
const ContextIndex = createContext<IContextIndex>({
	textInput: "",
	setTextInput() {},
});
export default ContextIndex;
interface Props {
	children: ReactNode;
}
export const ContextProviderIndex: React.FC<Props> = ({ children }) => {
	const [textInput, setTextInput] = useState("");
	return (
		<ContextIndex.Provider
			value={{
				textInput,
				setTextInput,
			}}
		>
			{children}
		</ContextIndex.Provider>
	);
};
