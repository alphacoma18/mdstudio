import { createContext, ReactNode, useState } from "react";
import { FileSchema } from "../../db/account";
import { IContextIndex, NewFileSchema } from "./interface";
const ContextIndex = createContext<IContextIndex>({
	textInput: "",
	setTextInput() {},
	files: {},
	setFiles() {},
	newFiles: {},
	setNewFiles() {},
	currentFileId: "",
	setCurrentFileId() {},
});
export default ContextIndex;
interface Props {
	children: ReactNode;
}
export const ContextProviderIndex: React.FC<Props> = ({ children }) => {
	const [textInput, setTextInput] = useState("");
	const [files, setFiles] = useState<FileSchema>({});
	const [newFiles, setNewFiles] = useState<NewFileSchema>({});
	const [currentFileId, setCurrentFileId] = useState<string>("");
	return (
		<ContextIndex.Provider
			value={{
				textInput,
				setTextInput,
				files,
				setFiles,
				newFiles,
				setNewFiles,
				currentFileId,
				setCurrentFileId,
			}}
		>
			{children}
		</ContextIndex.Provider>
	);
};
