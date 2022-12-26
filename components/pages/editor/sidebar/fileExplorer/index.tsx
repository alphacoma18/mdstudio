import { memo, useContext } from "react";
import handleAxios from "../../../../../utils/axios";
import ContextEditor from "../../../../../utils/context/editor";
import GenButton from "../../../../gen/button";
// import { data } from "./data";
import EditorFolder from "./folder";
import styles from "./index.module.css";
const EditorFileExplorer: React.FC = () => {
	const { projectState, editorState } = useContext(ContextEditor);

	const regex = /^[A-Za-z][\dA-Za-z]{1,9}$/;
	function handlePrompt(txt: string): string {
		try {
			const input = prompt(txt);
			if (input === null) return "";
			if (!regex.test(input)) throw new Error("Invalid input");
			return input;
		} catch (error) {
			alert(error);
			return handlePrompt(txt);
		}
	}
	async function handleNewFile() {
		const name = handlePrompt("Enter file name:");
		if (name === "") return;
		await handleAxios({
			method: "post",
			url: "/index/newFile",
			data: {
				id: editorState.id,
				path: editorState.currentFolder,
				fileName: name,
			},
		});
	}

	async function handleNewFolder() {
		const name = handlePrompt("Enter folder name:");
		if (name === null) return;
		await handleAxios({
			method: "post",
			url: "/index/newFolder",
			data: {
				id: editorState.id,
				path: editorState.currentFolder,
				folderName: name,
			},
		});
	}
	return (
		<section className={styles.fileExplorer}>
			<div className={styles.head}>
				<span className={`${styles.headItem} hoverParent`}>
					<GenButton props={{ label: "Explorer: upload to cloud" }}>
						<i className="icon-upload-cloud"></i>
					</GenButton>
				</span>
				<span className={`${styles.headItem} hoverParent`}>
					<GenButton
						props={{
							label: "Explorer: new file",
							onClick: handleNewFile,
						}}
					>
						<i className="icon-doc-add"></i>
					</GenButton>
					<GenButton
						props={{
							label: "Explorer: new folder",
							onClick: handleNewFolder,
						}}
					>
						<i className="icon-folder-add"></i>
					</GenButton>

					<GenButton
						props={{
							label: "Explorer: reload files",
							onClick: () => console.log("reload"),
						}}
					>
						<i className="icon-arrows-cw"></i>
					</GenButton>
				</span>
			</div>
			<div className={styles.body}>
				<EditorFolder project={projectState.fileSystem} />
			</div>
		</section>
	);
};

export default memo(EditorFileExplorer);
