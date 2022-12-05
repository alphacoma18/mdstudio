export interface IEditorState {
	id: string;
	textInput: string;
	currentFolder: string;
}
export interface IBarState {
	leftBarOpen: boolean;
	rightBarOpen: boolean;
	explorerOpen: boolean;
}
export type TBarState = "leftBarOpen" | "rightBarOpen" | "explorerOpen";
export type TEditorAction =
	| "updateTextInput"
	| "updateId"
	| "updateCurrentFolder";
export interface IContextIndex {
	editorState: IEditorState;
	updateEditorState: React.Dispatch<{
		type: TEditorAction;
		payload: string;
	}>;
	barState: IBarState;
	updateBarState: React.Dispatch<{
		type: TBarState;
	}>;
}
