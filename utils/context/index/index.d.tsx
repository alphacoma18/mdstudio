export interface IEditorState {
	id: string;
	textInput: string;
	currentFolder: string;
}
export type TEditorAction = "updateTextInput" | "updateId" | "updateCurrentFolder";
export interface IContextIndex {
	editorState: IEditorState;
	updateEditorState: React.Dispatch<{
		type: TEditorAction;
		payload: string;
	}>;
}
