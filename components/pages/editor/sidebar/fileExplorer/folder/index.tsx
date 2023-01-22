import GenButton from "@/gen/button";
import { ITreeFolder } from "@/db/projects/tree";
import { memo } from "react";
import styles from "./index.module.css";
import EditorRecur from "./recur";
interface Props {
	project: ITreeFolder;
}
const EditorFolder: React.FC<Props> = ({ project }) => {
	return (
		<section className={styles.folder}>
			{project?.files?.map((file) => (
				<GenButton
					key={`file-${file.fileName}`}
					props={{
						label: file.fileName,
						className: styles.rootFile,
						onClick: () => {
							// setEditorState({
							// 	id: "root",
							// 	currentFolder: "root",
							// });
						},
					}}
				>
					<i className="icon-doc-text"></i>
					{file.fileName}
				</GenButton>
			))}
			{project?.folders?.map((folder) => (
				<EditorRecur
					key={`root-${folder.folderName}`}
					parent={"root"}
					name={folder.folderName}
					folder={folder}
				/>
			))}
		</section>
	);
};

export default memo(EditorFolder);
