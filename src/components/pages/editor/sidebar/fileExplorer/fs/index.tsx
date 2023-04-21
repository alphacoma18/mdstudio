import { ITreeFolder } from "@/db/projects/tree";
import { memo } from "react";
import styles from "./index.module.css";
import EditorFile from "./recurFile";
import EditorFolder from "./recurFolder";
interface Props {
	folder: ITreeFolder;
}
const EditorFS: React.FC<Props> = ({ folder }) => {
	return (
		<section className={styles.folder}>
			<EditorFile
				props={{
					files: folder.files,
					folder,
					parent: "",
					currPath: `${folder.folderName}`,
				}}
			/>
			<div className={styles.rootFolder}>
				{folder?.folders?.map((fol) => (
					<EditorFolder
						key={`folder: folder-${fol.folderName}`}
						props={{
							parent: "",
							name: fol.folderName,
							folder: fol,
						}}
					/>
				))}
			</div>
		</section>
	);
};

export default memo(EditorFS);
