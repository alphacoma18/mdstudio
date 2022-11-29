import { useContext, useState } from "react";
import ContextIndex from "../../../../../../../utils/context/index";
import { FSSchema } from "../../../../../../../utils/db/account";
import styles from "../index.module.css";
const Recur: React.FC<{ folder: FSSchema; name: string }> = ({
	folder,
	name,
}) => {
	const { editorState, updateEditorState } = useContext(ContextIndex);
	const [open, setOpen] = useState<boolean>(false);
	function render() {
		try {
			const { _isDir, _files, _folders } = folder;
			if (!_isDir) return;
			return (
				<div className={styles.folder}>
					<div className={styles.folderName} onClick={() => setOpen(!open)}>
						{open ? (
							<i className="icon-folder-open"></i>
						) : (
							<i className="icon-folder"></i>
						)}
						{name}
					</div>
					{open && (
						<>
							{Object.keys(_files).map((file, index) => (
								<div
									key={index}
									className={styles.file}
									onClick={() =>
										updateEditorState({
											type: "updateTextInput",
											payload: _files[file]._content,
										})
									}
								>
									<i className="icon-doc-text"></i>
									{file}
								</div>
							))}
							{Object.keys(_folders).map((folder, index) => (
								<Recur
									key={index}
									name={folder}
									folder={_folders[folder] as FSSchema}
								/>
							))}
						</>
					)}
				</div>
			);
		} catch (error) {
			console.log(error);
		}
	}
	return <>{render()}</>;
};

export default Recur;
