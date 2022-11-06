import DOMPurify from "dompurify";
import { Options } from "easymde";
import dynamic from "next/dynamic";
import { useContext, useMemo } from "react";
import ContextIndex from "../../../../../utils/context/index/index";
import styles from "./index.module.css";
import EasyMDE from "easymde";
const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
	ssr: false,
});
const Editor: React.FC = () => {
	const { textInput, setTextInput } = useContext(ContextIndex);

	const mdOptions = useMemo(() => {
		return {
			minHeight: "100%",
			autosave: {
				enabled: true,
				uniqueId: "editor",
				delay: 1000,
			},
			renderingConfig: {
				codeSyntaxHighlighting: true,
				sanitizerFunction (html) {
					return DOMPurify.sanitize(html);
				},
			},
			maxHeight: "100%",
			autofocus: true,
			promptURLs: true,
			toolbarTips: false,
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
					children: ["heading-1", "heading-2", "heading-3", "heading-bigger", "heading-smaller"],
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
				"side-by-side",
				"fullscreen",
				"|",
				"guide",
			],

			status: ["autosave", "lines", "words", "cursor"],
			lineNumbers: true,
			uploadImage: true,
		} as Options;
	}, []);
	return (
		<>
			<SimpleMdeReact
				value={textInput}
				onChange={setTextInput}
				placeholder="Type or paste your text here..."
				options={mdOptions}
				className={`${styles.editor} kf-fade-in-fast`}
			/>
		</>
	);
};

export default Editor;
