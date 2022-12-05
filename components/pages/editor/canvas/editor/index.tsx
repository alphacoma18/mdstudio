import DOMPurify from "dompurify";
import { Options } from "easymde";
import dynamic from "next/dynamic";
import { memo, useContext, useEffect, useMemo } from "react";
import ContextIndex from "../../../../../utils/context/index/index";
import ContextGlobal from "../../../../../utils/context/_global";
import styles from "./index.module.css";
const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
	ssr: false,
});
const EditorMain: React.FC = () => {
	const { isMobile } = useContext(ContextGlobal);
	const { editorState, updateEditorState } = useContext(ContextIndex);

	const mdOptions = useMemo(() => {
		return {
			minHeight: "100%",
			renderingConfig: {
				codeSyntaxHighlighting: true,
				sanitizerFunction(html: string) {
					return DOMPurify.sanitize(html);
				},
			},

			maxHeight: "100%",
			autofocus: true,
			promptURLs: true,
			toolbarTips: false,
			styleSelectedText: true,
			// shortcuts: {
			// 	""
			// },
			toolbar: [
				"undo",
				"redo",
				"|",
				"bold",
				"italic",
				"strikethrough",
				"horizontal-rule",
				{
					name: "Headings",
					className: "fa fa-header",
					children: [
						"heading-1",
						"heading-2",
						"heading-3",
						"heading-bigger",
						"heading-smaller",
					],
				},
				"|",
				"quote",
				"unordered-list",
				"ordered-list",
				"|",
				"link",
				"image",
				"table",
				"code",
				"|",
				"preview",
				...(isMobile ? ["fullscreen"] : ["side-by-side", "fullscreen"]),
				"|",
				"guide",
			],

			status: ["autosave", "lines", "words", "cursor"],
			lineNumbers: true,
			uploadImage: true,
			imageUploadEndpoint: "/api/upload",
			imageAccept: "image/*",
			imageMaxSize: 1 * 1024 * 1024, // 1MB
		} as Options;
	}, [isMobile]);
	useEffect(() => {
		console.log("editorState", editorState.id);
	}, [editorState.id]);
	return (
		<>
			{/* Autosave is made unavailable */}
			<SimpleMdeReact
				value={editorState.textInput}
				onChange={(value) => {
					updateEditorState({ type: "updateTextInput", payload: value });
				}}
				placeholder="Type or paste your text here..."
				options={mdOptions}
				className={`${styles.editor} kf-fade-in-fast`}
			/>
		</>
	);
};

export default memo(EditorMain); // <--- memo() here
