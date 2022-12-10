import { useContext, useState } from "react";
import ContextIndex from "../../../../../../../utils/context/index";
import ContextGlobal from "../../../../../../../utils/context/_global";
import { FSSchema } from "../../../../../../../utils/db/account";
import styles from "../index.module.css";
const EditorRecur: React.FC<{ folder: FSSchema; name: string }> = ({
	folder,
	name,
}) => {
	const { isMobile } = useContext(ContextGlobal);
	const { updateEditorState, updateBarState } = useContext(ContextIndex);
	const [open, setOpen] = useState<boolean>(false);
	function render() {
		try {
			const { _isDir, _files, _folders } = folder;
			if (!_isDir) return;
			return (
				<>
					<button
						className={`${styles.folderName} ${styles.folder}`}
						onClick={() => setOpen(!open)}
					>
						{open ? (
							<i className="icon-folder-open"></i>
						) : (
							<i className="icon-folder"></i>
						)}
						{name}
					</button>
					{open && (
						<div className={styles.indent}>
							{Object.keys(_files).map((file) => (
								<button
									key={`file-${file}`}
									className={styles.file}
									onClick={() => {
										updateEditorState({
											type: "updateTextInput",
											payload: _files[file]._content,
										});
										if (isMobile) updateBarState({ type: "explorerClose" });
									}}
								>
									<i className="icon-doc-text"></i>
									{file}
								</button>
							))}
							{Object.keys(_folders).map((folder, index) => (
								<EditorRecur
									key={index}
									name={folder}
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
