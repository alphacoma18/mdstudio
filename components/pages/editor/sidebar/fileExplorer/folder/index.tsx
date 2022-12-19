import { memo, useContext } from "react";
import ContextEditor from "../../../../../../utils/context/editor/index";
import { TFileSystem } from "../../../../../../utils/db/account";
import GenButton from "../../../../../gen/button";
import styles from "./index.module.css";
import EditorRecur from "./recur";
interface Props {
	project: TFileSystem;
}
const EditorFolder: React.FC<Props> = ({ project }) => {
	const { updateEditorState } = useContext(ContextEditor);
	function render() {
		try {
			const { _isDir, _files, _folders } = project;
			if (!_isDir) return;
			return (
				<section className={styles.folder}>
					{Object.keys(_files ?? {}).map((file) => (
						<GenButton
							key={`file-${file}`}
							props={{
								label: file,
								className: styles.rootFile,
								onClick: () =>
									updateEditorState({
										type: "updateTextInput",
										payload: _files?.[file]._content as string,
									}),
							}}
						>
							<i className="icon-doc-text"></i>
							{file}
						</GenButton>
					))}
					{Object.keys(_folders ?? {}).map((folder) => (
						<EditorRecur
							key={`root-${folder}`}
							parent={"root"}
							name={folder}
							folder={_folders?.[folder] as TFileSystem}
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
