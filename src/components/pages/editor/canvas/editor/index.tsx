import handleAxios from "@/axios";
import ContextGlobal from "@/context/_global";
import ContextEditor from "@/context/editor";
import DOMPurify from "dompurify";
import { Options } from "easymde";
import dynamic from "next/dynamic";
import { memo, useContext, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.css";
const SimpleMdeReact = dynamic(
	async () => await import("react-simplemde-editor"),
	{
		ssr: false,
	}
);

async function postContent(projectId: string, fileId: string, content: string) {
	return handleAxios({
		url: `editor/update/${fileId}`,
		method: "post",
		payload: {
			projectId,
			content,
		},
	});
}
async function getContent(fileId: string) {
	return handleAxios({
		url: `editor/get/${fileId}`,
		method: "get",
	});
}
export default memo(() => {
	const changeRef = useRef<boolean>(false);
	const {
		device: { isHandheld },
	} = useContext(ContextGlobal);
	const { editorState, projectState, prevFileId } = useContext(ContextEditor);
	const [content, setContent] = useState<string>("");

	useEffect(() => {
		if (!changeRef.current) {
			changeRef.current = true;
			return;
		}

		const timeoutID = setTimeout(async () => {
			console.log("saving...");
			// Insert content into CURRENT file
			await postContent(projectState._id.toString(), editorState.id, content);
			console.log("saved");
		}, +process.env.AUTO_SAVE_INTERVAL);
		return () => clearTimeout(timeoutID);
	}, [content, editorState.id, projectState._id]);

	useEffect(() => {
		(async () => {
			const getRes = getContent(editorState.id);
			if (!prevFileId) {
				const getResData = await getRes;
				if (!getResData) return;
				setContent(getResData.data.content);
			} else {
				// Insert content into PREVIOUS file
				const postRes = postContent(
					projectState._id.toString(),
					prevFileId,
					content
				);
				const [getResData, postResData] = await Promise.all([getRes, postRes]);
				if (!getResData || !postResData) return;
				setContent(getResData.data.content);
			}
			changeRef.current = false;
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
			placeholder="Type or paste your markdown here..."
			options={mdOptions}
			className={`${styles.editor} kf-fade-in-fast`}
		/>
	);
});
