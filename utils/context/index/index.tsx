import React, { createContext, ReactNode, useReducer } from "react";
import {
	IBarState,
	IContextIndex,
	IEditorState,
	TBarState,
	TEditorAction,
} from "./index.d";
const ContextIndex = createContext<IContextIndex>({
	editorState: {
		id: "",
		textInput: "",
		currentFolder: "",
	},
	updateEditorState: () => {},
	barState: {
		leftBarOpen: false,
		rightBarOpen: false,
		explorerOpen: false,
	},
	updateBarState: () => {},
});
export default ContextIndex;
interface Props {
	children: ReactNode;
}
export const ContextProviderIndex: React.FC<Props> = ({ children }) => {
	function editorReducer(
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
	const [editorState, updateEditorState] = useReducer(editorReducer, {
		id: "",
		textInput: "",
		currentFolder: "",
	});

	function barReducer(state: IBarState, action: { type: TBarState }) {
		switch (action.type) {
			case "leftBarOpen":
				return {
					rightBarOpen: state.rightBarOpen && false,
					explorerOpen: false,
					leftBarOpen: !state.leftBarOpen,
				};
			case "rightBarOpen":
				return {
					leftBarOpen: state.leftBarOpen && false,
					explorerOpen: false,
					rightBarOpen: !state.rightBarOpen,
				};
			case "explorerOpen":
				return { ...state, explorerOpen: !state.explorerOpen };
			case "explorerClose":
				return { ...state, explorerOpen: false };
			default:
				return state;
		}
	}
	const [barState, updateBarState] = useReducer(barReducer, {
		leftBarOpen: false,
		rightBarOpen: false,
		explorerOpen: false,
	});

	return (
		<ContextIndex.Provider
			value={{
				editorState,
				updateEditorState,
				barState,
				updateBarState,
			}}
		>
			{children}
		</ContextIndex.Provider>
	);
};
