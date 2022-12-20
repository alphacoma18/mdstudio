import { ReactNode, createContext, useReducer } from "react";
import {
	IBarState,
	IContextEditor,
	IEditorState,
	TBarState,
	TEditorAction,
} from "./type";
const ContextEditor = createContext<IContextEditor>({
	editorState: {
		id: "",
		textInput: "",
		currentFolder: "",
	},
	updateEditorState: () => {
		return { type: "updateTextInput", payload: "" };
	},
	barState: {
		leftBarOpen: false,
		rightBarOpen: false,
		explorerOpen: false,
	},
	updateBarState: () => {
		return { type: "leftBarOpen" };
	},
});
export default ContextEditor;
interface Props {
	children: ReactNode;
}
export const ContextProviderEditor: React.FC<Props> = ({ children }) => {
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
		<ContextEditor.Provider
			value={{
				editorState,
				updateEditorState,
				barState,
				updateBarState,
			}}
		>
			{children}
		</ContextEditor.Provider>
	);
};
