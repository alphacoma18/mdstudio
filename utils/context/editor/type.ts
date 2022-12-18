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
export type TBarState =
	| "leftBarOpen"
	| "rightBarOpen"
	| "explorerOpen"
	| "explorerClose";
export type TEditorAction =
	| "updateTextInput"
	| "updateId"
	| "updateCurrentFolder";
export type TFocusAction =
	| "focusNav"
	| "focusEditor"
	| "focusStatus"
	| "focusExplorer";
export interface IContextEditor {
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
