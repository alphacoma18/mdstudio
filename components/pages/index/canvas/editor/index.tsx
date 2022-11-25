import DOMPurify from "dompurify";
import { Options } from "easymde";
import dynamic from "next/dynamic";
import { useContext, useMemo, useDeferredValue } from "react";
import ContextIndex from "../../../../../utils/context/index/index";
import ContextGlobal from "../../../../../utils/context/_global";
import styles from "./index.module.css";
const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
	ssr: false,
});
const Editor: React.FC = () => {
	const { isMobile } = useContext(ContextGlobal);
	const { textInput, setTextInput } = useContext(ContextIndex);
	const deferredTextInput = useDeferredValue(textInput);

	const mdOptions = useMemo(() => {
		return {
			minHeight: "100%",
			autosave: {
				enabled: true,
				uniqueId: "editor",
				delay: 2000,
				submit_delay: 2000,
			},
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<SimpleMdeReact
				id="editor"
				value={deferredTextInput}
				onChange={setTextInput}
				placeholder="Type or paste your text here..."
				options={mdOptions}
				className={`${styles.editor} kf-fade-in-fast`}
			/>
		</>
	);
};

export default Editor;
