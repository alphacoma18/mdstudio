import { ITreeFolder } from "@/db/projects/tree";
import { useState } from "react";
import styles from "./index.module.css";
import EditorFile from "./recurFile";
import EditorFolder from "./recurFolder";
// import EditorFileSetting from "./setting";
interface Props {
	folder: ITreeFolder;
}
const EditorFS: React.FC<Props> = ({ folder }) => {
	const [, setIsToggled] = useState<boolean>(false);
	function handleToggle() {
		setIsToggled((prev) => !prev);
	}
	return (
		<section className={styles.folder}>
			{/* {isToggled && <EditorFileSetting />} */}
			<EditorFile
				props={{
					files: folder.files,
					folder,
					parent: "",
					currPath: `${folder.folderName}`,
					handleToggle,
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
							handleToggle,
						}}
					/>
				))}
			</div>
		</section>
	);
};

export default EditorFS;
