import handleAxios from "@/axios";
import ContextEditor from "@/context/editor";
import GenButton from "@/gen/button";
import GenForm from "@/gen/form";
import { useRouter } from "next/router";
import { memo, useContext, useRef, useState } from "react";
import EditorFolder from "./folder";
import styles from "./index.module.css";

const EditorFileExplorer: React.FC = () => {
	const router = useRouter();
	const { projectState, setProjectState, editorState } =
		useContext(ContextEditor);
	const [isCreating, setIsCreating] = useState({
		isFile: false,
		creating: false,
		value: "",
	});
	const inputRef = useRef<HTMLInputElement>(null);
	async function handleCreate() {
		const res = await handleAxios({
			method: "post",
			url: `editor/create/${router.query.index?.[0]}`,
			data: {
				isFile: isCreating.isFile,
				pid: editorState.pid,
				name: isCreating.value,
			},
		});
		console.log(res.data.data);

		// setProjectState((prev) => ({
		// 	...prev,
		// 	fileSystem: res.data,
		// }));
		setIsCreating((prev) => ({ ...prev, creating: false }));
	}
	return (
		<>
			<section className={styles.fileExplorer}>
				<div className={styles.head}>
					<span className={`${styles.headItem} hoverParent`}>
						<GenButton props={{ label: "Explorer: change view mode" }}>
							<i className="icon-box"></i>
						</GenButton>
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
					submitFunc: handleCreate,
					backFunc: () =>
						setIsCreating((prev) => ({ ...prev, creating: false })),
				}}
			>
				<p className="note">Note: Create at &quot;/&quot;</p>
				<input
					type="text"
					className="inputThin"
					required
					placeholder={`>> Enter ${isCreating.isFile ? "file" : "folder"} name`}
					minLength={1}
					maxLength={20}
					ref={inputRef}
					onChange={(e) =>
						setIsCreating((prev) => ({ ...prev, value: e.target.value }))
					}
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
				<div className={styles.btnCtr}>
					<GenButton
						props={{
							label: "Clear input",
							className: "inputBtn btnPseudoBC",
							onClick: () => setIsCreating((prev) => ({ ...prev, value: "" })),
						}}
					>
						Clear
					</GenButton>
					<GenButton
						props={{
							label: "Submit input",
							className: "inputBtn btnPseudoBC",
							type: "submit",
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
