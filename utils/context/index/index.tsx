import React, { createContext, ReactNode, useReducer } from "react";
import { IContextIndex, IEditorState, TEditorAction } from "./index.d";
const ContextIndex = createContext<IContextIndex>({
	editorState: {
		id: "",
		textInput: "",
		currentFolder: "",
	},
	updateEditorState: () => {},
});
export default ContextIndex;
interface Props {
	children: ReactNode;
}
export const ContextProviderIndex: React.FC<Props> = ({ children }) => {
	function initialState(): IEditorState {
		let id = "",
			textInput = "",
			currentFolder = "";
		return {
			id,
			textInput,
			currentFolder,
		};
	}
	function reducer(
		state: IEditorState,
		action: { type: TEditorAction; payload: string }
	) {
		switch (action.type) {
			case "updateTextInput":
				return { ...state, textInput: action.payload };
			case "updateId":
				return { ...state, id: action.payload };
			case "updateCurrentFolder":
				return { ...state, currentFolder: action.payload };
			default:
				return state;
		}
	}
	const [editorState, updateEditorState] = useReducer(reducer, initialState());

	return (
		<ContextIndex.Provider
			value={{
				editorState,
				updateEditorState,
			}}
		>
			{children}
		</ContextIndex.Provider>
	);
};
