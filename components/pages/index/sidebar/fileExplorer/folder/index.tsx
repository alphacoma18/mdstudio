import { memo, useContext } from "react";
import ContextIndex from "../../../../../../utils/context/index";
import { FSSchema } from "../../../../../../utils/db/account";
import styles from "./index.module.css";
import Recur from "./recur";
interface Props {
	project: FSSchema;
}
const Folder: React.FC<Props> = ({ project }) => {
	const { editorState, updateEditorState } = useContext(ContextIndex);
	function render() {
		try {
			const { _isDir, _files, _folders } = project;
			if (!_isDir) return;
			return (
				<div
					className={styles.folder}
					onClick={() =>
						updateEditorState({ type: "updateCurrentFolder", payload: "root" })
					}
				>
					{Object.keys(_files).map((file, index) => (
						<div
							key={`root-${file}`}
							className={styles.rootFile}
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
				</div>
			);
		} catch (error) {
			console.log(error);
		}
	}
	return <>{render()}</>;
};

export default memo(Folder);
