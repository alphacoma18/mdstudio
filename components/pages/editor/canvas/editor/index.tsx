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

let isChanged = false;
export default memo(() => {
	const {
		device: { isHandheld },
	} = useContext(ContextGlobal);
	const { editorState, projectState } = useContext(ContextEditor);
	const [content, setContent] = useState<string>("");
	useEffect(() => {
		(async () => {
			if (!editorState.id) return;
			const res = await handleAxios({
				url: `editor/get/${editorState.id}`,
				method: "get",
			});
			if (!res.data.content) return setContent("");
			setContent(res.data.content);
		})();
	}, [editorState.id]);
	useEffect(() => {
		if (!isChanged) {
			isChanged = true;
			return;
		}
		const timeoutID = setTimeout(async () => {
			console.log("saving...");
			await handleAxios({
				url: `editor/update/${editorState.id}`,
				method: "post",
				payload: {
					projectId: projectState._id.toString(),
					content,
				},
			});
		}, +process.env.AUTO_SAVE_INTERVAL);
		return () => clearTimeout(timeoutID);
	}, [content, editorState.id, projectState._id]);
	useEffect(() => {
		(async () => {
			const res = await handleAxios({
				url: `editor/get/${editorState.id}`,
				method: "get",
			});
			if (res.data) setContent(res.data.content);
			isChanged = false;
		})();
	}, [editorState.id]);

	const mdOptions = useMemo(() => {
		return {
			spellChecker: true,
			nativeSpellcheck: true,
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
				...(isHandheld ? ["fullscreen"] : ["side-by-side", "fullscreen"]),
				"|",
				"guide",
			],
			status: isHandheld ? [] : ["autosave", "lines", "words", "cursor"],
			lineNumbers: !isHandheld,
			uploadImage: true,
			// TODO: change this to the actual endpoint
			imageUploadEndpoint: "/api/upload",
			imageAccept: "image/*",
			imageMaxSize: 1 * 1024 * 1024, // 1MB
		} as Options;
	}, [isHandheld]);
	return (
		<SimpleMdeReact
			value={content}
			onChange={(value) => setContent(value)}
			placeholder="Type or paste your text here..."
			options={mdOptions}
			className={`${styles.editor} kf-fade-in-fast`}
		/>
	);
});
