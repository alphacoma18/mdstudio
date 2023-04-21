import { ReactNode, createContext, useReducer, useState, useRef } from "react";
import { IBarState, IContextEditor, IEditorState, TBarState } from "./type";
import usePrevious from "@/utils/hooks/usePrevious";
const ContextEditor = createContext<IContextEditor>({} as IContextEditor);
export default ContextEditor;
interface Props {
	children: ReactNode;
}
export const ContextProviderEditor: React.FC<Props> = ({ children }) => {
	const [projectState, setProjectState] = useState<
		IContextEditor["projectState"]
	>({} as IContextEditor["projectState"]);

	const [editorState, setEditorState] = useState<IEditorState>(
		{} as IEditorState
	);

	const prevFileId = usePrevious(editorState.id || "");

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
				projectState,
				setProjectState,
				editorState,
				setEditorState,
				barState,
				updateBarState,
				prevFileId,
			}}
		>
			{children}
		</ContextEditor.Provider>
	);
};
