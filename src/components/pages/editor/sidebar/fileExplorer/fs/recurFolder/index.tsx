import ContextEditor from "@/context/editor";
import { ITreeFolder } from "@/db/projects/tree";
import GenButton from "@/gen/button";
import { useContext, useState } from "react";
import styles from "../index.module.css";
import EditorFile from "../recurFile";
import EditorFSOptions from "../options";
interface Props {
	props: {
		folder: ITreeFolder;
		parent: string;
		name: string;
	};
}
const EditorFolder: React.FC<Props> = ({
	props: { folder, parent: prev, name },
}) => {
	const { setEditorState } = useContext(ContextEditor);
	const [open, setOpen] = useState<boolean>(false);
	function render() {
		const { files, folders, _id } = folder;
		return (
			<>
				<GenButton
					props={{
						label: `Folder: ${name}`,
						className: styles.folder,
						onClick: () => {
							setEditorState((_prev) => ({
								..._prev,
								pid: _id.toString(),
								path: `${prev}/${name}`,
							}));
							setOpen((prev) => !prev);
						},
					}}
				>
					{open ? (
						<i className="icon-folder-open"></i>
					) : (
						<i className="icon-folder"></i>
					)}
					{name}
					<EditorFSOptions />
					{/* <i className={`icon-cog ${styles.cog}`}></i> */}
				</GenButton>
				{open && (
					<div className={styles.indent}>
						<EditorFile
							props={{
								files,
								folder,
								parent: `${prev}/${name}`,
								currPath: name,
							}}
						/>

						{folders?.map((folder) => (
							<EditorFolder
								key={`folder-${folder}`}
								props={{
									parent: `${prev}/${name}`,
									name: folder.folderName,
									folder,
								}}
							/>
						))}
					</div>
				)}
			</>
		);
	}
	return <>{render()}</>;
};

export default EditorFolder;
