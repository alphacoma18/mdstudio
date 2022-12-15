import { memo, useContext } from "react";
import ContextIndex from "../../../../../../utils/context/index";
import { FSSchema } from "../../../../../../utils/db/account";
import GenButton from "../../../../../gen/button";
import styles from "./index.module.css";
import EditorRecur from "./recur";
interface Props {
	project: FSSchema;
}
const EditorFolder: React.FC<Props> = ({ project }) => {
	const { updateEditorState } = useContext(ContextIndex);
	function render() {
		try {
			const { _isDir, _files, _folders } = project;
			if (!_isDir) return;
			return (
				<section className={styles.folder}>
					{Object.keys(_files).map((file) => (
						<GenButton
							key={`file-${file}`}
							props={{
								label: file,
								className: styles.rootFile,
								onClick: () =>
									updateEditorState({
										type: "updateTextInput",
										payload: _files[file]._content,
									}),
							}}
						>
							<i className="icon-doc-text"></i>
							{file}
						</GenButton>
					))}
					{Object.keys(_folders).map((folder) => (
						<EditorRecur
							key={`root-${folder}`}
							parent={"root"}
							name={folder}
							folder={_folders[folder] as FSSchema}
						/>
					))}
				</section>
			);
		} catch (error) {
			console.log(error);
		}
	}
	return <>{render()}</>;
};

export default memo(EditorFolder);
