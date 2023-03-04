import handleAxios from "@/axios";
import ContextGlobal from "@/context/_global";
import ContextEditor from "@/context/editor";
import DOMPurify from "dompurify";
import { Options } from "easymde";
import dynamic from "next/dynamic";
import { memo, useContext, useEffect, useMemo, useState } from "react";
import styles from "./index.module.css";
const SimpleMdeReact = dynamic(
	async () => await import("react-simplemde-editor"),
	{
		ssr: false,
	}
);
const EditorMain: React.FC = () => {
	const { device } = useContext(ContextGlobal);
	const { editorState } = useContext(ContextEditor);
	const [content, setContent] = useState<string>(() => {
		return "";
	});
	useEffect(() => {
		(async () => {
			const res = await handleAxios({
				url: `editor/get/${editorState.id}`,
				method: "get",
			});
			if (res.data) setContent(res.data.content);
		})();
	}, [editorState.id]);

	const mdOptions = useMemo(() => {
		return {
			spellChecker: true,
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
			shortcuts: {
				toggleHeading1: "Cmd-Alt-1",
				toggleHeading2: "Cmd-Alt-2",
				toggleHeading3: "Cmd-Alt-3",
				toggleHeading4: "Cmd-Alt-4",
				toggleHeading5: "Cmd-Alt-5",
				toggleHeading6: "Cmd-Alt-6",
			},
			previewImagesInEditor: true,
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
			// TODO: change this to the actual endpoint
			imageUploadEndpoint: "/api/upload",
			imageAccept: "image/*",
			imageMaxSize: 1 * 1024 * 1024, // 1MB
		};
	}, [device]);
	return (
		<SimpleMdeReact
			value={content}
			onChange={(value) => setContent(value)}
			// if control + shift + b is pressed, then prevent default
			placeholder="Type or paste your text here..."
			options={mdOptions as Options}
			className={`${styles.editor} kf-fade-in-fast`}
		/>
	);
};

export default memo(EditorMain); // <--- memo() here
