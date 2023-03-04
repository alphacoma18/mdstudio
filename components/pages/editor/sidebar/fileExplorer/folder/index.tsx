import ContextEditor from "@/context/editor";
import { ITreeFolder } from "@/db/projects/tree";
import GenButton from "@/gen/button";
import { memo, useContext } from "react";
import styles from "./index.module.css";
import EditorRecur from "./recur";
interface Props {
	folder: ITreeFolder;
}
const EditorFolder: React.FC<Props> = ({ folder }) => {
	const { setEditorState } = useContext(ContextEditor);
	return (
		<section className={styles.folder}>
			{folder?.files?.map((file) => (
				<GenButton
					key={`file-${file.fileName}`}
					props={{
						label: file.fileName,
						className: styles.rootFile,
						onClick: () => {
							setEditorState((prev) => ({
								...prev,
								id: file._id.toString(),
								pid: folder._id.toString(),
							}));
						},
					}}
				>
					<i className="icon-doc-text"></i>
					{file.fileName}
				</GenButton>
			))}
			<div className={styles.rootFolder}>
				{folder?.folders?.map((fol) => (
					<EditorRecur
						key={`root-${fol.folderName}`}
						parent=""
						name={fol.folderName}
						folder={fol}
					/>
				))}
			</div>
		</section>
	);
};

export default memo(EditorFolder);
