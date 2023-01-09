import { ITreeProject } from "../../db/projects/tree";
export interface IEditorState {
	id: string;
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
export type TFocusAction =
	| "focusNav"
	| "focusEditor"
	| "focusStatus"
	| "focusExplorer";
export interface IContextEditor {
	projectState: ITreeProject;
	setProjectState: React.Dispatch<React.SetStateAction<ITreeProject>>;
	editorState: IEditorState;
	setEditorState: React.Dispatch<React.SetStateAction<IEditorState>>;
	barState: IBarState;
	updateBarState: React.Dispatch<{
		type: TBarState;
	}>;
}
