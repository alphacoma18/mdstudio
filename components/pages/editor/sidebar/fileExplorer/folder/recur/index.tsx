import ContextGlobal from "@/context/_global";
import ContextEditor from "@/context/editor";
import { ITreeFolder } from "@/db/projects/tree";
import GenButton from "@/gen/button";
import { useContext, useState } from "react";
import styles from "../index.module.css";
const EditorRecur: React.FC<{
	folder: ITreeFolder;
	name: string;
}> = ({ folder, name }) => {
	const { device } = useContext(ContextGlobal);
	const { setEditorState, updateBarState } = useContext(ContextEditor);
	const [open, setOpen] = useState<boolean>(false);
	function render() {
		const { files, folders, _id } = folder;
		return (
			<>
				<GenButton
					props={{
						label: name,
						className: `${styles.folderName} ${styles.folder}`,
						onClick: () => {
							setEditorState({
								id: _id.toString(),
								pid: folder._id.toString(),
							});
							setOpen(!open);
						},
					}}
				>
					{open ? (
						<i className="icon-folder-open"></i>
					) : (
						<i className="icon-folder"></i>
					)}
					{name}
				</GenButton>
				{open && (
					<div className={styles.indent}>
						{files?.map((file) => (
							<GenButton
								key={`file-${file}`}
								props={{
									label: file.fileName,
									className: styles.file,
									onClick: () => {
										setEditorState({
											id: _id.toString(),
											pid: folder._id.toString(),
										});
										if (device === "mobile" || device === "tablet")
											updateBarState({
												type: "explorerClose",
											});
									},
								}}
							>
								<i className="icon-doc-text"></i>
								{file.fileName}
							</GenButton>
						))}

						{folders?.map((folder) => (
							<EditorRecur
								key={`folder-${folder}`}
								name={folder.folderName}
								folder={folder}
							/>
						))}
					</div>
				)}
			</>
		);
	}
	return <>{render()}</>;
};

export default EditorRecur;
