import DOMPurify from "dompurify";
import { Options } from "easymde";
import dynamic from "next/dynamic";
import { memo, useContext, useMemo } from "react";
import ContextGlobal from "../../../../../utils/context/_global";
import ContextIndex from "../../../../../utils/context/index/index";
import styles from "./index.module.css";
const SimpleMdeReact = dynamic(
	async () => await import("react-simplemde-editor"),
	{
		ssr: false,
	}
);
const EditorMain: React.FC = () => {
	const { device } = useContext(ContextGlobal);
	const { editorState, updateEditorState } = useContext(ContextIndex);

	const mdOptions = useMemo(() => {
		return {
			spellChecker: false,
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
				...(device === "tablet" || device === "mobile"
					? ["fullscreen"]
					: ["side-by-side", "fullscreen"]),
				"|",
				"guide",
			],
			status: ["autosave", "lines", "words", "cursor"],
			lineNumbers: device === "laptop" || device === "desktop",
			uploadImage: true,
			imageUploadEndpoint: "/api/upload",
			imageAccept: "image/*",
			imageMaxSize: 1 * 1024 * 1024, // 1MB
		};
	}, [device]);
	return (
		<SimpleMdeReact
			value={editorState.textInput}
			onChange={(value) => {
				updateEditorState({ type: "updateTextInput", payload: value });
			}}
			// if control + shift + b is pressed, then prevent default
			onKeyDown={(e) => {
				if (e.ctrlKey && e.shiftKey && e.key === "B") {
					e.preventDefault();
					console.log("ctrl key pressed");
				}
			}}
			placeholder="Type or paste your text here..."
			options={mdOptions as Options}
			className={`${styles.editor} kf-fade-in-fast`}
		/>
	);
};

export default memo(EditorMain); // <--- memo() here
