import { useContext, useState } from "react";
import ContextGlobal from "../../../../../../../utils/context/_global";
import ContextEditor from "../../../../../../../utils/context/editor/index";
import { FSSchema } from "../../../../../../../utils/db/account";
import GenButton from "../../../../../../gen/button";
import styles from "../index.module.css";
const EditorRecur: React.FC<{
	folder: FSSchema;
	parent: string;
	name: string;
}> = ({ folder, parent: prev, name }) => {
	const { device } = useContext(ContextGlobal);
	const { updateEditorState, updateBarState } = useContext(ContextEditor);
	const [open, setOpen] = useState<boolean>(false);
	function render() {
		try {
			const { _isDir, _files, _folders } = folder;
			if (!_isDir) return;
			return (
				<>
					<GenButton
						props={{
							label: name,
							className: `${styles.folderName} ${styles.folder}`,
							onClick: () => {
								updateEditorState({
									type: "updateCurrentFolder",
									payload: `${prev}/${name}`,
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
							{Object.keys(_files).map((file) => (
								<GenButton
									key={`file-${file}`}
									props={{
										label: file,
										className: styles.file,
										onClick: () => {
											updateEditorState({
												type: "updateTextInput",
												payload: _files[file]._content,
											});
											updateEditorState({
												type: "updateCurrentFolder",
												payload: `${prev}/${name}`,
											});
											if (device === "mobile" || device === "tablet")
												updateBarState({
													type: "explorerClose",
												});
										},
									}}
								>
									<i className="icon-doc-text"></i>
									{file}
								</GenButton>
							))}
							{Object.keys(_folders).map((folder, index) => (
								<EditorRecur
									key={index}
									name={folder}
									parent={prev + "/" + name}
									folder={_folders[folder] as FSSchema}
								/>
							))}
						</div>
					)}
				</>
			);
		} catch (error) {
			console.log(error);
		}
	}
	return <>{render()}</>;
};

export default EditorRecur;
