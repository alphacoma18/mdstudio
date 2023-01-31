import handleAxios from "@/axios";
import ContextEditor from "@/context/editor";
import GenButton from "@/gen/button";
import GenForm from "@/gen/form";
import { memo, useContext, useRef, useState } from "react";
import EditorFolder from "./folder";
import styles from "./index.module.css";
const EditorFileExplorer: React.FC = () => {
	const { projectState, editorState } = useContext(ContextEditor);
	const [isCreating, setIsCreating] = useState({
		isFile: false,
		creating: false,
		value: "",
	});
	const inputRef = useRef<HTMLInputElement>(null);

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
			url: "/editor/newFile",
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
			url: "/editor/newFolder",
			data: {
				id: editorState.id,
				path: editorState.currentFolder,
				folderName: name,
			},
		});
	}
	return (
		<>
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
								onClick: () => {
									setIsCreating({ isFile: true, creating: true, value: "" });
									inputRef.current?.focus();
								},
							}}
						>
							<i className="icon-doc-add"></i>
						</GenButton>
						<GenButton
							props={{
								label: "Explorer: new folder",
								onClick: () => {
									setIsCreating({ isFile: false, creating: true, value: "" });
									inputRef.current?.focus();
								},
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
			<GenForm
				props={{
					id: "createFile",
					isActive: isCreating.creating,
					title: `Create new ${isCreating.isFile ? "file" : "folder"}`,
					submitFunc: () => {},
					backFunc: () => {
						setIsCreating((prev) => ({ ...prev, creating: false }));
					},
				}}
			>
				<p className="inputNote">Note: Create at &quot;/&quot;</p>
				<input
					type="text"
					className="inputThin"
					required
					placeholder={`>> Enter ${isCreating.isFile ? "file" : "folder"} name`}
					minLength={1}
					maxLength={20}
					ref={inputRef}
					onChange={(e) => {
						setIsCreating((prev) => ({ ...prev, value: e.target.value }));
					}}
					value={isCreating.value}
					onKeyDown={(e) => {
						if (e.key === "Escape")
							setIsCreating((prev) => ({
								...prev,
								value: "",
								creating: false,
							}));
					}}
				/>
				<div className={styles.buttonParent}>
					<GenButton
						props={{
							label: "Clear input",
							className: "inputButton",
							onClick: () => setIsCreating((prev) => ({ ...prev, value: "" })),
						}}
					>
						Clear
					</GenButton>
					<GenButton
						props={{
							label: "Submit input",
							className: "inputButton",
						}}
					>
						Create
					</GenButton>
				</div>
				<hr />
			</GenForm>
		</>
	);
};

export default memo(EditorFileExplorer);
